// ========================================
// 医疗器械法规知识库智能系统 - 主应用逻辑
// ========================================

// 合并所有法规数据
const ALL_REGULATIONS = [
    ...(typeof CN_REGULATIONS !== 'undefined' ? CN_REGULATIONS : []),
    ...(typeof CN_LOCAL_REGULATIONS !== 'undefined' ? CN_LOCAL_REGULATIONS : []),
    ...(typeof INTL_REGULATIONS !== 'undefined' ? INTL_REGULATIONS : [])
];

// 当前选中的法规（用于详情和下载）
let currentRegulation = null;
let currentFilterTag = 'all';

// ========================================
// 初始化
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    initSearch();
    initQuickTags();
    initUpload();
    initPromptGenerator();
    renderRegulations(ALL_REGULATIONS);
    renderReviewStandards();
    renderStats();
});

// ========================================
// Tab切换
// ========================================
function initTabs() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;
            navBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('tab-' + targetTab).classList.add('active');
        });
    });
}

// ========================================
// 搜索与过滤
// ========================================
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearch');
    const filterRegion = document.getElementById('filterRegion');
    const filterCategory = document.getElementById('filterCategory');
    const filterStatus = document.getElementById('filterStatus');

    searchInput.addEventListener('input', performSearch);
    filterRegion.addEventListener('change', performSearch);
    filterCategory.addEventListener('change', performSearch);
    filterStatus.addEventListener('change', performSearch);

    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.style.display = 'none';
        performSearch();
    });

    searchInput.addEventListener('input', () => {
        clearBtn.style.display = searchInput.value ? 'block' : 'none';
    });
}

function initQuickTags() {
    const tagBtns = document.querySelectorAll('.tag-btn');
    tagBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tagBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilterTag = btn.dataset.tag;
            performSearch();
        });
    });
}

function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const region = document.getElementById('filterRegion').value;
    const category = document.getElementById('filterCategory').value;
    const status = document.getElementById('filterStatus').value;

    const filtered = ALL_REGULATIONS.filter(reg => {
        // 文本搜索
        if (query) {
            const searchText = (reg.title + ' ' + reg.number + ' ' + reg.summary + ' ' + reg.content + ' ' + reg.keywords.join(' ')).toLowerCase();
            if (!searchText.includes(query)) return false;
        }

        // 地区过滤
        if (region && reg.region !== region) return false;

        // 类别过滤
        if (category && reg.category !== category) return false;

        // 状态过滤
        if (status && !reg.status.includes(status)) return false;

        // 标签过滤
        if (currentFilterTag !== 'all') {
            const regKeywords = reg.keywords.map(k => k.toLowerCase());
            const tagMap = {
                '注册': ['注册', '备案', '注册证', 'pma', '510k', 'mdr', '注册人'],
                '生产': ['生产', 'gmp', '生产质量', '委托生产'],
                '临床试验': ['临床试验', 'gcp', '临床评价', 'ide', '临床研究'],
                '质量': ['质量', 'qms', 'qsr', 'gmp', '体系核查', '13485'],
                '风险': ['风险', '风险管理', '风险分析', '14971'],
                '不良事件': ['不良事件', '监测', 'mdr', '报告', '警戒'],
                '说明书': ['说明书', '标签', '命名'],
                '软件': ['软件', 'samd', 'ai', '人工智能', '62304', '网络安全'],
                'UDI': ['udi', '唯一标识', '追溯'],
                '网络安全': ['网络安全', '信息安全', 'cybersecurity'],
                'FDA': ['fda', '美国', 'qsr', '510k', 'pma'],
                'MDR': ['mdr', '欧盟', 'eu', 'ce认证', 'notified'],
                'ISO': ['iso', '13485', '14971', '10993', '62366', '14155', '60601', '11607'],
                '注册人制度': ['注册人制度', 'mah', '委托生产', 'ma']
            };
            const tagKeywords = tagMap[currentFilterTag] || [];
            const hasMatch = tagKeywords.some(kw => regKeywords.some(rk => rk.includes(kw)));
            if (!hasMatch) return false;
        }

        return true;
    });

    renderRegulations(filtered);
}

// ========================================
// 渲染法规列表
// ========================================
function renderRegulations(regs) {
    const container = document.getElementById('regulationList');
    const noResults = document.getElementById('noResults');
    const countEl = document.getElementById('resultCount');

    countEl.textContent = regs.length;

    if (regs.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'flex';
        return;
    }

    noResults.style.display = 'none';

    container.innerHTML = regs.map(reg => {
        const regionClass = getRegionClass(reg.region);
        const statusBadge = getStatusBadge(reg.status);
        const keywordsHtml = reg.keywords.slice(0, 6).map(k =>
            `<span class="keyword-chip">${k}</span>`
        ).join('');

        return `
            <div class="reg-card ${regionClass}" onclick="showDetail('${reg.id}')">
                <div class="reg-card-header">
                    <div>
                        <div class="reg-card-title">${highlightSearch(reg.title)}</div>
                        <div class="reg-card-number">${reg.number} | ${reg.authority}</div>
                    </div>
                    <div class="reg-card-badges">
                        <span class="badge badge-region">${reg.region}</span>
                        <span class="badge badge-category">${reg.category}</span>
                        ${statusBadge}
                    </div>
                </div>
                <div class="reg-card-summary">${reg.summary}</div>
                <div class="reg-card-meta">
                    <span>发布日期: ${reg.publishDate}</span>
                    <span>实施日期: ${reg.effectiveDate}</span>
                    ${reg.subRegion && reg.subRegion !== '国家' ? `<span>地区: ${reg.subRegion}</span>` : ''}
                </div>
                <div class="reg-card-keywords">${keywordsHtml}</div>
            </div>
        `;
    }).join('');
}

function getRegionClass(region) {
    if (region === '中国') return 'region-cn';
    if (region === '美国') return 'region-us';
    if (region === '欧盟') return 'region-eu';
    if (region === '国际') return 'region-intl';
    return 'region-other';
}

function getStatusBadge(status) {
    if (status.includes('现行有效') || status.includes('常态化') || status.includes('实施中')) {
        return `<span class="badge badge-status">${status}</span>`;
    }
    return `<span class="badge badge-status warning">${status}</span>`;
}

function highlightSearch(text) {
    const query = document.getElementById('searchInput').value.trim();
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark style="background:#fef08a;padding:1px 2px;border-radius:2px;">$1</mark>');
}

// ========================================
// 法规详情
// ========================================
function showDetail(id) {
    const reg = ALL_REGULATIONS.find(r => r.id === id);
    if (!reg) return;
    currentRegulation = reg;

    document.getElementById('modalTitle').textContent = reg.title;

    const body = document.getElementById('modalBody');
    body.innerHTML = `
        <div class="detail-meta-grid">
            <div class="detail-meta-item">
                <span class="detail-meta-label">法规编号</span>
                <span class="detail-meta-value">${reg.number}</span>
            </div>
            <div class="detail-meta-item">
                <span class="detail-meta-label">发布机构</span>
                <span class="detail-meta-value">${reg.authority}</span>
            </div>
            <div class="detail-meta-item">
                <span class="detail-meta-label">所属地区</span>
                <span class="detail-meta-value">${reg.region}${reg.subRegion && reg.subRegion !== '国家' ? ' - ' + reg.subRegion : ''}</span>
            </div>
            <div class="detail-meta-item">
                <span class="detail-meta-label">法规类别</span>
                <span class="detail-meta-value">${reg.category}</span>
            </div>
            <div class="detail-meta-item">
                <span class="detail-meta-label">发布日期</span>
                <span class="detail-meta-value">${reg.publishDate}</span>
            </div>
            <div class="detail-meta-item">
                <span class="detail-meta-label">实施日期</span>
                <span class="detail-meta-value">${reg.effectiveDate}</span>
            </div>
            <div class="detail-meta-item">
                <span class="detail-meta-label">实施状态</span>
                <span class="detail-meta-value">${reg.status}</span>
            </div>
            <div class="detail-meta-item">
                <span class="detail-meta-label">关键词</span>
                <span class="detail-meta-value">${reg.keywords.join('、')}</span>
            </div>
        </div>

        <h3>法规摘要</h3>
        <p>${reg.summary}</p>

        <h3>法规内容</h3>
        <pre>${reg.content}</pre>

        ${reg.url ? `<h3>官方链接</h3><p><a href="${reg.url}" target="_blank" style="color:var(--primary);">${reg.url}</a></p>` : ''}
    `;

    document.getElementById('detailModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('detailModal').style.display = 'none';
}

// 点击模态框外部关闭
document.addEventListener('click', (e) => {
    if (e.target.id === 'detailModal') closeModal();
});

// ========================================
// 下载功能
// ========================================
document.getElementById('downloadReg')?.addEventListener('click', () => {
    if (!currentRegulation) return;
    downloadRegulation(currentRegulation);
});

function downloadRegulation(reg) {
    const content = formatRegulationAsMarkdown(reg);
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${reg.id}_${reg.title.replace(/[^\w\u4e00-\u9fa5]/g, '_')}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('法规文件已下载');
}

function formatRegulationAsMarkdown(reg) {
    return `# ${reg.title}

## 基本信息

| 项目 | 内容 |
|------|------|
| 法规编号 | ${reg.number} |
| 发布机构 | ${reg.authority} |
| 所属地区 | ${reg.region}${reg.subRegion && reg.subRegion !== '国家' ? ' - ' + reg.subRegion : ''} |
| 法规类别 | ${reg.category} |
| 发布日期 | ${reg.publishDate} |
| 实施日期 | ${reg.effectiveDate} |
| 实施状态 | ${reg.status} |
| 关键词 | ${reg.keywords.join('、')} |

## 法规摘要

${reg.summary}

## 法规内容

${reg.content}

${reg.url ? `## 官方链接\n${reg.url}` : ''}

---

*本文档由医疗器械法规知识库智能系统自动生成*
*生成时间: ${new Date().toLocaleString('zh-CN')}*
`;
}

// ========================================
// 文档审核模块
// ========================================
function initUpload() {
    const uploadZone = document.getElementById('uploadZone');
    const fileInput = document.getElementById('fileInput');

    uploadZone.addEventListener('click', () => fileInput.click());

    uploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.classList.add('dragover');
    });

    uploadZone.addEventListener('dragleave', () => {
        uploadZone.classList.remove('dragover');
    });

    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.classList.remove('dragover');
        if (e.dataTransfer.files.length > 0) {
            handleFile(e.dataTransfer.files[0]);
        }
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleFile(e.target.files[0]);
        }
    });

    document.getElementById('removeFile').addEventListener('click', () => {
        document.getElementById('reviewContent').style.display = 'none';
        document.getElementById('uploadZone').style.display = 'block';
        fileInput.value = '';
        document.getElementById('docContent').value = '';
    });

    document.getElementById('startReview').addEventListener('click', performReview);
}

function handleFile(file) {
    document.getElementById('uploadZone').style.display = 'none';
    document.getElementById('reviewContent').style.display = 'block';
    document.getElementById('fileName').textContent = file.name;

    const reader = new FileReader();
    reader.onload = (e) => {
        document.getElementById('docContent').value = e.target.result;
    };
    reader.readAsText(file);
}

function renderReviewStandards() {
    const standards = [
        { id: 'reg-cn', label: '中国NMPA注册要求', checked: true },
        { id: 'qms', label: '质量管理体系(ISO 13485)', checked: true },
        { id: 'risk', label: '风险管理(ISO 14971)', checked: true },
        { id: 'label', label: '说明书与标签', checked: true },
        { id: 'clinical', label: '临床评价要求', checked: false },
        { id: 'biocomp', label: '生物学评价(ISO 10993)', checked: false },
        { id: 'software', label: '软件与网络安全', checked: false },
        { id: 'post-market', label: '上市后监管', checked: false },
        { id: 'reg-fda', label: 'FDA合规要求', checked: false },
        { id: 'reg-eu', label: 'EU MDR合规要求', checked: false }
    ];

    const container = document.getElementById('reviewStandards');
    container.innerHTML = standards.map(s => `
        <label class="checkbox-label">
            <input type="checkbox" id="${s.id}" ${s.checked ? 'checked' : ''}> ${s.label}
        </label>
    `).join('');
}

function performReview() {
    const content = document.getElementById('docContent').value.trim();
    if (!content) {
        showToast('请输入或上传文档内容');
        return;
    }

    const selectedStandards = [];
    document.querySelectorAll('#reviewStandards input:checked').forEach(cb => {
        selectedStandards.push(cb.id);
    });

    if (selectedStandards.length === 0) {
        showToast('请至少选择一个审核标准');
        return;
    }

    const result = analyzeDocument(content, selectedStandards);
    displayReviewResult(result);
}

function analyzeDocument(content, standards) {
    const results = [];
    let passCount = 0;
    let failCount = 0;
    let warnCount = 0;

    const checks = {
        'reg-cn': [
            { test: /通用名称|产品名称|型号|规格/i, desc: '包含产品名称、型号规格信息', reg: '医疗器械说明书和标签管理规定' },
            { test: /注册人|备案人|生产企业/i, desc: '包含注册人/生产企业信息', reg: '医疗器械监督管理条例' },
            { test: /注册证编号|备案凭证编号/i, desc: '包含注册证/备案凭证编号', reg: '医疗器械注册与备案管理办法' },
            { test: /适用范围|预期用途|禁忌症/i, desc: '包含适用范围和禁忌症', reg: '医疗器械说明书和标签管理规定' },
            { test: /生产日期|使用期限|失效日期/i, desc: '包含生产日期和使用期限', reg: '医疗器械说明书和标签管理规定' },
            { test: /注意事项|警示|禁忌/i, desc: '包含注意事项和警示信息', reg: '医疗器械说明书和标签管理规定' },
            { test: /灭菌|无菌|消毒/i, desc: '包含灭菌/消毒信息(如适用)', reg: '医疗器械生产质量管理规范' }
        ],
        'qms': [
            { test: /设计开发|设计输入|设计输出|设计验证|设计确认/i, desc: '包含设计开发控制要求', reg: 'ISO 13485 第7章' },
            { test: /风险管理|风险分析|风险评价|风险控制/i, desc: '包含风险管理要求', reg: 'ISO 13485 + ISO 14971' },
            { test: /采购|供应商|合格供方/i, desc: '包含采购控制要求', reg: 'ISO 13485 7.4' },
            { test: /过程确认|过程验证|IQ|OQ|PQ/i, desc: '包含过程确认要求', reg: 'ISO 13485 7.5.6' },
            { test: /CAPA|纠正措施|预防措施|不合格品/i, desc: '包含CAPA要求', reg: 'ISO 13485 8.5' },
            { test: /追溯|批号|序列号|UDI/i, desc: '包含追溯性要求', reg: 'ISO 13485 7.5.9' }
        ],
        'risk': [
            { test: /风险管理计划/i, desc: '包含风险管理计划', reg: 'ISO 14971' },
            { test: /风险分析|FMEA|FTA|危害识别/i, desc: '包含风险分析方法', reg: 'ISO 14971' },
            { test: /风险可接受|风险评价准则/i, desc: '包含风险可接受性准则', reg: 'ISO 14971' },
            { test: /风险控制|风险降低|剩余风险/i, desc: '包含风险控制措施', reg: 'ISO 14971' },
            { test: /综合剩余风险|风险管理报告|评审/i, desc: '包含风险管理评审', reg: 'ISO 14971' },
            { test: /生产和生产后|上市后|PMS|PMCF/i, desc: '包含生产后信息收集', reg: 'ISO 14971' }
        ],
        'label': [
            { test: /通用名称/i, desc: '包含通用名称', reg: '医疗器械说明书和标签管理规定' },
            { test: /型号.*规格/i, desc: '包含型号规格', reg: '医疗器械说明书和标签管理规定' },
            { test: /注册人.*名称.*住所.*联系方式|生产企业.*名称.*地址/i, desc: '包含注册人/生产企业信息', reg: '医疗器械说明书和标签管理规定' },
            { test: /产品技术要求.*编号/i, desc: '包含产品技术要求编号', reg: '医疗器械说明书和标签管理规定' },
            { test: /性能.*主要结构.*适用范围/i, desc: '包含性能、结构和适用范围', reg: '医疗器械说明书和标签管理规定' },
            { test: /禁忌症.*注意事项.*警示/i, desc: '包含禁忌症、注意事项和警示', reg: '医疗器械说明书和标签管理规定' },
            { test: /安装.*使用说明|操作说明/i, desc: '包含安装和使用说明', reg: '医疗器械说明书和标签管理规定' },
            { test: /维护.*保养|储存条件.*运输条件/i, desc: '包含维护和储存运输条件', reg: '医疗器械说明书和标签管理规定' }
        ],
        'clinical': [
            { test: /临床评价|临床数据|临床试验/i, desc: '包含临床评价内容', reg: '医疗器械临床评价技术指导原则' },
            { test: /同品种比对|等同性|predicate/i, desc: '包含同品种比对信息(如适用)', reg: '等同性论证技术指导原则' },
            { test: /入组标准|排除标准|主要终点|次要终点/i, desc: '包含临床试验设计要素(如适用)', reg: '医疗器械临床试验质量管理规范' },
            { test: /知情同意|伦理委员会/i, desc: '包含知情同意和伦理审查', reg: '医疗器械临床试验质量管理规范' },
            { test: /样本量|统计|P值|置信区间/i, desc: '包含统计分析信息', reg: '医疗器械临床试验质量管理规范' }
        ],
        'biocomp': [
            { test: /生物相容性|生物学评价/i, desc: '包含生物学评价', reg: 'ISO 10993-1' },
            { test: /细胞毒性/i, desc: '包含细胞毒性评价', reg: 'ISO 10993-5' },
            { test: /致敏|刺激/i, desc: '包含致敏和刺激评价', reg: 'ISO 10993-10' },
            { test: /急性毒性|全身毒性/i, desc: '包含全身毒性评价', reg: 'ISO 10993-11' },
            { test: /接触时间.*接触部位|表面接触.*外部接入.*植入/i, desc: '包含接触分类', reg: 'ISO 10993-1' }
        ],
        'software': [
            { test: /软件名称.*版本号|软件版本/i, desc: '包含软件版本信息', reg: 'IEC 62304' },
            { test: /软件安全等级|Class A|Class B|Class C|严重级别|中等级别|轻微级别/i, desc: '包含软件安全等级', reg: 'IEC 62304' },
            { test: /软件需求|软件设计|软件测试/i, desc: '包含软件生命周期文档', reg: 'IEC 62304' },
            { test: /网络安全|数据安全|访问控制|加密/i, desc: '包含网络安全要求', reg: 'FDA/MDR Cybersecurity' },
            { test: /算法.*更新|版本更新|补丁/i, desc: '包含软件更新管理', reg: 'IEC 62304' },
            { test: /SBOM|软件物料清单/i, desc: '包含SBOM信息(FDA要求)', reg: 'FDA Cybersecurity 2023' }
        ],
        'post-market': [
            { test: /不良事件|AE|SAE/i, desc: '包含不良事件监测', reg: '医疗器械不良事件监测管理办法' },
            { test: /PSUR|定期安全更新|趋势分析/i, desc: '包含定期安全报告', reg: 'EU MDR + NMPA' },
            { test: /召回|纠正措施/i, desc: '包含召回管理', reg: '医疗器械召回管理办法' },
            { test: /上市后|PMS|PMCF|上市后临床/i, desc: '包含上市后监管计划', reg: 'EU MDR' }
        ],
        'reg-fda': [
            { test: /510\(k\)|PMA|De Novo/i, desc: '包含FDA上市路径', reg: '21 CFR 807/814' },
            { test: /predicate|substantial equivalence|实质等同/i, desc: '包含实质等同性分析(510(k))', reg: '21 CFR 807' },
            { test: /design control|设计控制|DHF/i, desc: '包含设计控制要求', reg: '21 CFR 820.30' },
            { test: /QSR|GMP|质量体系/i, desc: '包含质量体系要求', reg: '21 CFR Part 820' },
            { test: /UDI|DI.*PI/i, desc: '包含UDI信息', reg: '21 CFR 830' },
            { test: /MDR.*report|不良事件报告|MedWatch/i, desc: '包含MDR不良事件报告', reg: '21 CFR 803' }
        ],
        'reg-eu': [
            { test: /MDR|CE.*认证|符合性声明|Declaration of Conformity/i, desc: '包含MDR合规信息', reg: 'EU MDR 2017/745' },
            { test: /Essential Principles|GSPR|安全有效基本要求/i, desc: '包含GSPR要求', reg: 'EU MDR Annex I' },
            { test: /technical documentation|技术文件|Annex II/i, desc: '包含技术文件要求', reg: 'EU MDR Annex II' },
            { test: /PMCF|上市后临床随访/i, desc: '包含PMCF计划', reg: 'EU MDR Article 61' },
            { test: /EUDAMED|UDI.*DB/i, desc: '包含EUDAMED/UDI注册', reg: 'EU MDR Article 28' },
            { test: /Notified Body|公告机构/i, desc: '包含公告机构信息', reg: 'EU MDR' }
        ]
    };

    // 执行审核
    standards.forEach(stdId => {
        const checksForStd = checks[stdId];
        if (!checksForStd) return;

        checksForStd.forEach(check => {
            const passed = check.test.test(content);
            if (passed) {
                passCount++;
                results.push({ type: 'pass', desc: check.desc, reg: check.reg });
            } else {
                failCount++;
                results.push({ type: 'fail', desc: `缺少: ${check.desc}`, reg: check.reg });
            }
        });
    });

    // 额外检查
    const wordCount = content.length;
    if (wordCount < 200) {
        warnCount++;
        results.push({ type: 'warn', desc: '文档内容较少，可能信息不完整', reg: '通用要求' });
    }

    if (content.includes('TODO') || content.includes('待补充') || content.includes('TBD')) {
        warnCount++;
        results.push({ type: 'warn', desc: '文档中包含未完成标记(TODO/待补充)', reg: '通用要求' });
    }

    const totalChecks = passCount + failCount;
    const score = totalChecks > 0 ? Math.round((passCount / totalChecks) * 100) : 0;

    return {
        score,
        passCount,
        failCount,
        warnCount,
        results,
        wordCount
    };
}

function displayReviewResult(result) {
    const container = document.getElementById('reviewResult');
    container.style.display = 'block';

    const scoreClass = result.score >= 80 ? 'high' : result.score >= 60 ? 'mid' : 'low';
    const scoreLabel = result.score >= 80 ? '合规性良好' : result.score >= 60 ? '需改进' : '合规风险较高';

    let html = `
        <div class="review-score">
            <div class="score-circle ${scoreClass}">${result.score}%</div>
            <div class="score-text">
                <h4>${scoreLabel}</h4>
                <p>通过 ${result.passCount} 项 / 未通过 ${result.failCount} 项 / 警告 ${result.warnCount} 项 | 文档字数: ${result.wordCount}</p>
            </div>
        </div>
    `;

    // 分组显示
    const passResults = result.results.filter(r => r.type === 'pass');
    const failResults = result.results.filter(r => r.type === 'fail');
    const warnResults = result.results.filter(r => r.type === 'warn');

    if (failResults.length > 0) {
        html += '<div class="review-result-section"><h4>未通过项（需补充）</h4>';
        failResults.forEach(r => {
            html += `<div class="review-item fail"><div class="review-item-icon">!</div><div><strong>${r.desc}</strong><br><span style="font-size:12px;color:var(--text-light);">参考法规: ${r.reg}</span></div></div>`;
        });
        html += '</div>';
    }

    if (warnResults.length > 0) {
        html += '<div class="review-result-section"><h4>警告项</h4>';
        warnResults.forEach(r => {
            html += `<div class="review-item warn"><div class="review-item-icon">?</div><div><strong>${r.desc}</strong><br><span style="font-size:12px;color:var(--text-light);">参考法规: ${r.reg}</span></div></div>`;
        });
        html += '</div>';
    }

    if (passResults.length > 0) {
        html += '<div class="review-result-section"><h4>已通过项</h4>';
        passResults.forEach(r => {
            html += `<div class="review-item pass"><div class="review-item-icon">&#10003;</div><div><strong>${r.desc}</strong><br><span style="font-size:12px;color:var(--text-light);">参考法规: ${r.reg}</span></div></div>`;
        });
        html += '</div>';
    }

    // 改进建议
    html += '<div class="review-result-section"><h4>改进建议</h4><div style="padding:16px;background:var(--bg);border-radius:8px;">';
    const suggestions = [];
    if (result.failCount > 0) {
        suggestions.push(`文档有 ${result.failCount} 项法规要求未满足，建议参照上述"未通过项"中的法规要求补充相关内容。`);
    }
    if (result.score < 60) {
        suggestions.push('合规评分较低，建议全面对照适用法规要求修订文档。');
    }
    if (result.wordCount < 500) {
        suggestions.push('文档内容较少，建议补充更详细的技术信息。');
    }
    if (result.score >= 80) {
        suggestions.push('文档整体合规性良好，建议进一步对照具体法规条款进行最终确认。');
    }
    suggestions.push('建议使用"提示词生成"功能，生成针对当前产品类型的法规咨询GPT提示词，以获得更专业的合规指导。');

    suggestions.forEach((s, i) => {
        html += `<p style="margin-bottom:8px;">${i + 1}. ${s}</p>`;
    });
    html += '</div></div>';

    container.innerHTML = html;
    container.scrollIntoView({ behavior: 'smooth' });
}

// ========================================
// GPT提示词生成模块
// ========================================
function initPromptGenerator() {
    document.getElementById('generatePrompt').addEventListener('click', generatePrompt);
    document.getElementById('copyPrompt').addEventListener('click', copyPrompt);
    document.getElementById('downloadPrompt').addEventListener('click', downloadPrompt);
}

function generatePrompt() {
    const productType = document.getElementById('productType').value;
    const targetMarkets = Array.from(document.querySelectorAll('#targetMarkets input:checked')).map(cb => cb.value);
    const riskLevel = document.getElementById('riskLevel').value;
    const focusAreas = Array.from(document.querySelectorAll('#focusAreas input:checked')).map(cb => cb.value);
    const purpose = document.getElementById('promptPurpose').value;
    const additionalReq = document.getElementById('additionalReq').value.trim();

    if (targetMarkets.length === 0) {
        showToast('请至少选择一个目标市场');
        return;
    }

    if (focusAreas.length === 0) {
        showToast('请至少选择一个关注领域');
        return;
    }

    const prompt = buildPrompt(productType, targetMarkets, riskLevel, focusAreas, purpose, additionalReq);
    document.getElementById('promptOutput').textContent = prompt;
    document.getElementById('promptResult').style.display = 'block';
    document.getElementById('promptResult').scrollIntoView({ behavior: 'smooth' });
}

function buildPrompt(productType, markets, riskLevel, focusAreas, purpose, additionalReq) {
    const productTypeMap = {
        'general': '通用医疗器械',
        'ivd': '体外诊断试剂(IVD)',
        'software': '医疗器械软件(SaMD)',
        'ai': '人工智能医疗器械',
        'implant': '植入性医疗器械',
        'custom': '定制式医疗器械',
        'consumable': '医用耗材'
    };

    const purposeMap = {
        'consultant': '法规咨询顾问',
        'reviewer': '技术文件审核员',
        'regulator': '模拟监管检查员',
        'writer': '技术文件撰写助手',
        'auditor': 'QMS内审员',
        'trainer': '法规培训讲师'
    };

    const riskLevelMap = {
        '1': '一类（低风险）',
        '2': '二类（中风险）',
        '3': '三类（高风险）',
        'all': '全部风险等级'
    };

    // 根据选择获取相关法规
    const relevantRegs = getRelevantRegulations(markets, focusAreas);
    const regsList = relevantRegs.map(r => `- 《${r.title}》(${r.number}) - ${r.summary}`).join('\n');

    // 根据产品类型添加专业补充
    const productSpecifics = getProductSpecifics(productType, markets, focusAreas);
    const purposeSpecifics = getPurposeSpecifics(purpose);

    const prompt = `# 医疗器械法规合规专家 - 系统提示词

## 角色定义

你是一位资深的医疗器械法规合规专家，具备以下专业能力：
- 精通中国NMPA、美国FDA、欧盟MDR/IVDR等多国医疗器械法规体系
- 深入理解ISO/IEC国际标准（ISO 13485、ISO 14971、IEC 62304、IEC 60601等）
- 熟悉医疗器械全生命周期监管要求（从设计开发到上市后监管）
- 具备丰富的医疗器械注册申报、质量体系建立、临床评价实战经验
- 了解IMDRF国际协调框架和各国监管互认机制

你的当前专业身份：${purposeMap[purpose]}

## 产品与市场背景

**产品类型：** ${productTypeMap[productType]}
**目标市场：** ${markets.join('、')}
**风险等级：** ${riskLevelMap[riskLevel]}
**关注领域：** ${focusAreas.join('、')}
${additionalReq ? `**特殊要求：** ${additionalReq}` : ''}

## 适用法规框架

在回答问题时，你必须基于以下法规和标准进行判断和建议：

### 中国法规（如适用）
${markets.includes('中国') ? getRegsByRegion(relevantRegs, '中国') : '不适用当前目标市场'}

### 美国FDA法规（如适用）
${markets.includes('美国') ? getRegsByRegion(relevantRegs, '美国') : '不适用当前目标市场'}

### 欧盟MDR/IVDR法规（如适用）
${markets.includes('欧盟') ? getRegsByRegion(relevantRegs, '欧盟') : '不适用当前目标市场'}

### 国际标准（如适用）
${getRegsByRegion(relevantRegs, '国际')}

### 其他市场监管要求
${getOtherMarketRegs(markets, relevantRegs)}

## ${productSpecifics}

## 专业行为准则

${purposeSpecifics}

### 回答规范

1. **法规引用准确**：每个建议必须引用具体的法规条款或标准编号，格式为"[法规名称 第X条]"或"[标准编号 条款]"
2. **风险导向**：优先关注高风险事项，按风险等级排序提供建议
3. **可操作性**：建议必须具体、可执行，避免笼统描述
4. **多市场协调**：如涉及多国市场，需指出各市场监管要求的差异和协调路径
5. **时效性提醒**：对处于过渡期或草案阶段的法规，需特别标注其状态和影响
6. **交叉引用**：识别法规之间的交叉引用关系，避免遗漏关联要求

### 回答结构

对于每个问题，按以下结构回答：

1. **法规依据**：列出适用的法规和标准
2. **合规分析**：分析当前情况是否符合法规要求
3. **风险提示**：指出潜在合规风险
4. **行动建议**：提供具体的整改/完善建议
5. **参考文件**：建议准备的技术文件和证据材料

### 知识边界声明

- 你的建议基于上述法规框架，不构成法律意见
- 对于法规未明确的问题，应说明法规现状并建议咨询监管机构
- 你了解的法规信息可能存在更新滞后，建议用户关注最新法规动态
- 对于具体产品的分类判定，建议以官方分类界定结果为准

### 特殊场景处理

- **如果被问到具体的临床试验设计**：提醒需要符合各国的GCP要求（中国GCP/FDA IDE/EU MDR临床试验要求），并建议咨询生物统计学家
- **如果被问到软件/AI医疗器械**：需要考虑软件安全等级分类（IEC 62304 Class A/B/C 或 NMPA A/B/C），以及算法更新管理（FDA PCCP框架）
- **如果被问到网络安全**：需引用FDA 2023网络安全指南、EU MDCG 2019-16和中国医疗器械网络安全指导原则
- **如果被问到生物学评价**：需按ISO 10993-1的矩阵选择评价终点，并考虑豁免评价路径
- **如果被问到注册路径选择**：需要根据产品分类、创新程度、是否有predicate device等综合判断
- **如果被问到UDI实施**：需区分各市场的UDI实施时间表和数据库要求（GUDID/EUDAMED/中国UDI数据库）

### 补充知识库

以下是你应当掌握的关键法规要点（已自动补全）：

${getSupplementaryKnowledge(productType, markets, focusAreas)}

---

请基于以上系统提示词，开始以医疗器械法规合规${purposeMap[purpose]}的身份回答用户问题。在回答前，请先确认你理解了用户的产品类型（${productTypeMap[productType]}）、目标市场（${markets.join('、')}）和关注领域（${focusAreas.join('、')}）。`;

    return prompt;
}

function getRelevantRegulations(markets, focusAreas) {
    return ALL_REGULATIONS.filter(reg => {
        // 市场匹配
        if (markets.includes('中国') && reg.region === '中国') return true;
        if (markets.includes('美国') && reg.region === '美国') return true;
        if (markets.includes('欧盟') && reg.region === '欧盟') return true;
        if (markets.includes('日本') && reg.region === '日本') return true;
        if (markets.includes('澳大利亚') && reg.region === '澳大利亚') return true;
        if (markets.includes('加拿大') && reg.region === '加拿大') return true;
        // 国际标准对所有市场都适用
        if (reg.region === '国际' || reg.region === '东盟') return true;

        return false;
    });
}

function getRegsByRegion(regs, region) {
    const filtered = regs.filter(r => r.region === region);
    if (filtered.length === 0) return '当前选择中无相关法规';
    return filtered.map(r => `- 《${r.title}》(${r.number})\n  ${r.summary}`).join('\n');
}

function getOtherMarketRegs(markets, regs) {
    const otherMarkets = markets.filter(m => !['中国', '美国', '欧盟'].includes(m));
    if (otherMarkets.length === 0) return '不适用';
    let result = '';
    otherMarkets.forEach(market => {
        const marketRegs = regs.filter(r => r.region === market);
        if (marketRegs.length > 0) {
            result += `\n${market}:\n`;
            result += marketRegs.map(r => `- 《${r.title}》(${r.number}) - ${r.summary}`).join('\n');
        }
    });
    return result || '不适用';
}

function getProductSpecifics(productType, markets, focusAreas) {
    const specifics = {
        'general': `### 通用医疗器械专业要求
- 产品分类：按《医疗器械分类规则》和《医疗器械分类目录》确定产品分类
- 注册路径：根据分类确定注册或备案路径（一类备案/二三类注册）
- 技术要求：编制产品技术要求，明确性能指标和检验方法
- 质量体系：按ISO 13485/中国GMP建立质量管理体系
- 风险管理：按ISO 14971开展风险管理活动
- 临床评价：按临床评价技术指导原则选择评价路径`,

        'ivd': `### 体外诊断试剂(IVD)专业要求
- 分类管理：按《体外诊断试剂注册与备案管理办法》分类
- 性能评价：需进行科学有效性、分析性能和临床性能评价
- 伴随诊断：如为伴随诊断试剂，需与药品监管机构协调
- EU IVDR：按Regulation (EU) 2017/746进行分类(Class A-D)
- FDA路径：根据风险选择510(k)、PMA或De Novo路径
- 参考物质：需建立溯源性和校准体系
- 临床试验：按ISO 20916开展IVD临床试验`,

        'software': `### 医疗器械软件(SaMD)专业要求
- 软件安全等级：按IEC 62304分为Class A/B/C（或NMPA A/B/C）
- 软件生命周期：遵循IEC 62304的软件生命周期过程
- 软件文档：包括软件需求规格说明、架构设计、详细设计、测试报告
- 网络安全：按FDA 2023指南和EU MDCG 2019-16要求建立网络安全体系
- SBOM：FDA要求提供软件物料清单(SBOM)
- SOUP管理：对第三方软件组件(SOUP)进行管理
- 软件配置管理：建立版本控制和变更管理
- 软件更新管理：区分重大更新和轻微更新`,

        'ai': `### 人工智能医疗器械专业要求
- 算法分类：区分基于规则的AI、传统机器学习和深度学习
- 算法更新管理：按FDA PCCP框架管理算法更新
  * Lock AI：锁定型AI，参数固定
  * Adaptive AI：持续学习型AI，需PCCP预设变更控制计划
- 数据集管理：训练集、调优集、测试集需独立且具有代表性
- 性能评估：敏感性、特异性、AUC等指标
- 可解释性：算法决策过程的可解释性要求
- 公平性：不同子群体的性能差异分析
- 持续监测：上市后AI性能监测和漂移检测
- 法规参考：FDA AI/ML SaMD行动计划、EU MDCG 2024-3、中国AI医疗器械注册审查指导原则`,

        'implant': `### 植入性医疗器械专业要求
- 高风险分类：通常为三类/Class III/Class D
- 生物学评价：需按ISO 10993全系列进行生物学评价
- 植入试验：通常需要动物植入试验（ISO 10993-6）
- 临床试验：通常需要开展临床试验
- 植入卡：EU MDR要求提供植入卡
- UDI：需要UDI直接标识（Direct Marking）
- 上市后监管：强化PMCF和PSUR要求
- 撤销/取出：需要考虑器械取出方案
- 长期安全性：需要长期随访数据
- 材料安全：ISO 10993-18材料化学表征
- 电磁兼容：有源植入器械需满足IEC 60601-1-2`,

        'custom': `### 定制式医疗器械专业要求
- 定义：为特定患者个性化制造的医疗器械
- 管理方式：不实行注册管理，实行备案管理
- 前提条件：已上市器械难以满足临床需求
- 生产许可：需取得医疗器械生产许可证
- 唯一识别号：每件定制器械需建立唯一识别号
- 使用限制：仅限授权医疗机构使用
- 不得流通：不得在市场上流通使用
- 医患需求：需由授权医务人员提出需求
- 3D打印：如涉及3D打印，需参考增材制造相关指导原则
- 质量管理：需建立定制器械质量管理体系`,

        'consumable': `### 医用耗材专业要求
- 分类管理：按耗材风险等级进行分类
- 灭菌确认：如为灭菌产品需进行灭菌确认（EO/辐射/蒸汽等）
- 包装验证：按ISO 11607进行包装验证
- 有效期验证：需进行加速老化和实时老化验证
- 一次性使用：如为一次性使用需明确标注
- 生物相容性：按ISO 10993进行生物学评价
- 集采合规：关注国家及地方带量采购政策
- UDI实施：耗材是UDI实施的重点产品
- 配送管理：如为冷链产品需建立冷链管理体系`
    };

    return specifics[productType] || specifics['general'];
}

function getPurposeSpecifics(purpose) {
    const specifics = {
        'consultant': `### 法规咨询顾问行为准则
- 以提供专业、准确的法规咨询服务为核心
- 主动识别用户的潜在合规风险
- 提供多方案对比分析，推荐最优路径
- 对不确定的问题，明确说明并建议向监管机构确认
- 保持中立客观，不偏向特定解决方案`,

        'reviewer': `### 技术文件审核员行为准则
- 以审查技术文件完整性和合规性为核心
- 逐条对照法规要求检查文档
- 提供详细的审核清单和缺陷报告
- 标注必须修改项(Major)和建议修改项(Minor)
- 对每项缺陷提供法规依据和修改建议`,

        'regulator': `### 模拟监管检查员行为准则
- 以模拟监管检查视角审查
- 按检查清单逐项核查
- 模拟发出现场检查缺陷项（严重缺陷/一般缺陷）
- 评估体系运行有效性
- 提出整改要求和时限`,

        'writer': `### 技术文件撰写助手行为准则
- 以协助撰写符合法规要求的技术文件为核心
- 提供文件大纲和模板建议
- 指导各章节应包含的关键内容
- 确保文件间的逻辑一致性和交叉引用正确性
- 标注需要补充的数据和试验`,

        'auditor': `### QMS内审员行为准则
- 以内部质量管理体系审核为核心
- 按ISO 13485/21 CFR 820条款逐项审核
- 识别不符合项和观察项
- 评估CAPA有效性
- 提出体系改进建议`,

        'trainer': `### 法规培训讲师行为准则
- 以法规知识传播和培训为核心
- 用通俗易懂的方式解释法规要求
- 结合案例说明法规的实际应用
- 设计培训大纲和考核要点
- 提供实操练习和模拟题`
    };

    return specifics[purpose] || specifics['consultant'];
}

function getSupplementaryKnowledge(productType, markets, focusAreas) {
    let knowledge = '';

    if (focusAreas.includes('注册申报')) {
        knowledge += `#### 注册申报关键要点
- 注册证有效期：中国5年、需在到期前6个月申请延续
- 510(k)审评时限：FDA 90天（Traditional）/ 30天（Special）
- PMA审评时限：FDA 180天（可延长）
- EU MDR技术文件：Annex II & III格式
- 同品种比对路径：需获得同品种产品数据授权
- 创新特别审查：中国创新绿色通道（15个工作日初审）
- 优先审批：罕见病/儿童/临床急需产品可走优先通道\n\n`;
    }

    if (focusAreas.includes('质量体系')) {
        knowledge += `#### 质量管理体系关键要点
- 中国GMP：医疗器械生产质量管理规范（2015版）
- 美国QSR：21 CFR Part 820 → 2026年起转为QMSR（与ISO 13485接轨）
- EU MDR：要求符合ISO 13485:2016
- MDSAP：一次审核覆盖5国（美/加/澳/日/巴西）
- 体系核查重点：设计开发、采购控制、生产过程、CAPA
- 软件GMP：独立软件需满足IEC 62304 + ISO 13485\n\n`;
    }

    if (focusAreas.includes('风险管理')) {
        knowledge += `#### 风险管理关键要点
- ISO 14971:2019：国际通用风险管理标准
- 风险管理过程：分析→评价→控制→综合评价→评审→生产后信息
- 常用工具：FMEA、FTA、HAZOP、UseFMEA
- 风险可接受准则：ALARP原则（As Low As Reasonably Practicable）
- 与QMS整合：风险管理应嵌入整个QMS
- 上市后更新：利用上市后数据更新风险管理文件\n\n`;
    }

    if (focusAreas.includes('临床试验')) {
        knowledge += `#### 临床试验关键要点
- 中国GCP：医疗器械临床试验质量管理规范（2022版）
- FDA IDE：需区分SR（重大风险）和NSR（非重大风险）
- EU MDR：Clinical Investigation需符合ISO 14155
- 知情同意：所有试验必须获得受试者知情同意
- 伦理审查：需通过伦理委员会审查
- 临床评价路径：免于临床试验/同品种比对/临床试验
- 真实世界数据：可作为临床评价的补充证据\n\n`;
    }

    if (focusAreas.includes('说明书标签')) {
        knowledge += `#### 说明书与标签关键要点
- 中国：医疗器械说明书和标签管理规定（原食药监总局令第6号）
- FDA：21 CFR 801 Labeling
- EU MDR：Annex I Chapter III Information supplied with the device
- 通用名称：不得含有型号、企业名、商标名
- 必须包含内容：名称、型号、注册人信息、注册证号、技术要求编号、性能、适用范围、禁忌症、注意事项、生产日期、使用期限
- 植入器械：需提供植入卡
- UDI标注：标签和包装需标注UDI\n\n`;
    }

    if (focusAreas.includes('不良事件')) {
        knowledge += `#### 不良事件监测关键要点
- 中国：医疗器械不良事件监测和再评价管理办法（市监总局令第1号）
- 死亡事件：7日内报告
- 严重伤害事件：20日内报告
- FDA MDR：21 CFR 803，死亡/严重伤害30个工作日内报告
- EU MDR：严重事件15日内报告，FSCA 10日内报告
- PSUR：定期安全更新报告（EU MDR要求）
- 信号检测：利用上市后数据进行信号检测和分析
- 警戒体系升级：中国正在推进从不良事件监测向警戒体系升级\n\n`;
    }

    if (focusAreas.includes('网络安全')) {
        knowledge += `#### 网络安全关键要点
- FDA：2023年起网络安全成为上市前提条件（FD&C Act 524B）
- SBOM：FDA强制要求软件物料清单
- EU MDR：MDCG 2019-16 Cybersecurity guidance
- 中国：医疗器械网络安全注册审查指导原则（2022）
- 网络安全能力：自动注销、审核、授权、节点鉴别、数据备份等10项
- 威胁建模：STRIDE/DREAD方法
- CVD流程：协调漏洞披露（Coordinated Vulnerability Disclosure）
- 上市后：持续监测网络安全威胁，及时发布安全补丁\n\n`;
    }

    if (focusAreas.includes('生物学评价')) {
        knowledge += `#### 生物学评价关键要点
- ISO 10993系列：国际通用生物学评价标准
- 评价路径：豁免评价/文献评价/生物学试验
- 接触分类：表面接触/外部接入/植入
- 接触时间：短期(≤24h)/长期(24h-30d)/持久(>30d)
- 基本评价终点：细胞毒性、致敏、刺激、急性毒性、致热性
- 补充评价终点：亚慢性毒性、遗传毒性、植入、血液相容性
- 材料化学表征：ISO 10993-18，可用化学表征替代部分生物学试验
- EO残留：ISO 10993-7\n\n`;
    }

    if (focusAreas.includes('上市后监管')) {
        knowledge += `#### 上市后监管关键要点
- 中国：不良事件监测+再评价+召回管理
- FDA：MDR报告+522 Postmarket Surveillance+PAS（PMA产品）
- EU MDR：PMS计划+PMCF+PSUR+趋势报告
- 上市后临床随访(PMCF)：EU MDR要求定期更新临床数据
- 召回分级：一级（3日内通知）/二级（5日）/三级（10日）
- 定期安全更新报告(PSUR)：EU MDR要求Class IIa每年、IIb/III每2年
- FSCA（Field Safety Corrective Action）：EU MDR现场安全纠正措施\n\n`;
    }

    if (focusAreas.includes('UDI')) {
        knowledge += `#### UDI系统关键要点
- UDI组成：产品标识(DI)+生产标识(PI)
- 发码机构：GS1、HIBCC、ICCBBA
- 中国实施：2019年起分批实施，逐步覆盖全部三类、二类器械
- FDA实施：2014-2018年分批实施（Class III→II→I）
- EU MDR：2021-2027年分阶段实施
- 数据库：中国UDI数据库/FDA GUDID/EU EUDAMED
- 直接标识(Direct Marking)：可重复使用器械需在器械本身标注UDI
- UDI载体：条码/二维码/RFID\n\n`;
    }

    if (!knowledge) {
        knowledge = '请根据具体需求选择关注领域以获取补充知识。';
    }

    return knowledge;
}

function copyPrompt() {
    const prompt = document.getElementById('promptOutput').textContent;
    navigator.clipboard.writeText(prompt).then(() => {
        showToast('提示词已复制到剪贴板');
    }).catch(() => {
        // 降级方案
        const textarea = document.createElement('textarea');
        textarea.value = prompt;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('提示词已复制到剪贴板');
    });
}

function downloadPrompt() {
    const prompt = document.getElementById('promptOutput').textContent;
    const blob = new Blob([prompt], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `meddevice_regulatory_gpt_prompt_${Date.now()}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('提示词文件已下载');
}

// ========================================
// 统计模块
// ========================================
function renderStats() {
    const total = ALL_REGULATIONS.length;

    // 按地区统计
    const regionStats = {};
    ALL_REGULATIONS.forEach(reg => {
        regionStats[reg.region] = (regionStats[reg.region] || 0) + 1;
    });

    // 按类别统计
    const categoryStats = {};
    ALL_REGULATIONS.forEach(reg => {
        categoryStats[reg.category] = (categoryStats[reg.category] || 0) + 1;
    });

    // 关键词统计
    const keywordStats = {};
    ALL_REGULATIONS.forEach(reg => {
        reg.keywords.forEach(kw => {
            keywordStats[kw] = (keywordStats[kw] || 0) + 1;
        });
    });

    // 渲染数字卡片
    const cnCount = (regionStats['中国'] || 0);
    const intlCount = total - cnCount;
    const currentCount = ALL_REGULATIONS.filter(r => r.status.includes('现行有效')).length;

    document.getElementById('statsGrid').innerHTML = `
        <div class="stat-card">
            <div class="stat-number">${total}</div>
            <div class="stat-label">法规总数</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">${cnCount}</div>
            <div class="stat-label">中国法规</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">${intlCount}</div>
            <div class="stat-label">国际法规</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">${currentCount}</div>
            <div class="stat-label">现行有效</div>
        </div>
    `;

    // 渲染地区柱状图
    const maxRegion = Math.max(...Object.values(regionStats));
    const regionColors = {
        '中国': '#dc2626',
        '美国': '#2563eb',
        '欧盟': '#086788',
        '国际': '#7c3aed',
        '日本': '#0891b2',
        '澳大利亚': '#16a34a',
        '加拿大': '#ea580c',
        '东盟': '#ca8a04'
    };

    document.getElementById('regionChart').innerHTML = Object.entries(regionStats)
        .sort((a, b) => b[1] - a[1])
        .map(([region, count]) => `
            <div class="bar-item">
                <div class="bar-label">${region}</div>
                <div class="bar-track">
                    <div class="bar-fill" style="width:${(count / maxRegion * 100)}%; background:${regionColors[region] || '#64748b'};">${count}</div>
                </div>
            </div>
        `).join('');

    // 渲染类别柱状图
    const maxCategory = Math.max(...Object.values(categoryStats));
    document.getElementById('categoryChart').innerHTML = Object.entries(categoryStats)
        .sort((a, b) => b[1] - a[1])
        .map(([cat, count]) => `
            <div class="bar-item">
                <div class="bar-label">${cat}</div>
                <div class="bar-track">
                    <div class="bar-fill" style="width:${(count / maxCategory * 100)}%;">${count}</div>
                </div>
            </div>
        `).join('');

    // 渲染关键词热力图
    const sortedKeywords = Object.entries(keywordStats).sort((a, b) => b[1] - a[1]).slice(0, 40);
    const maxKwCount = sortedKeywords[0][1];
    document.getElementById('keywordHeatmap').innerHTML = sortedKeywords.map(([kw, count]) => {
        const intensity = count / maxKwCount;
        const bgColor = intensity > 0.7 ? '#1a56db' : intensity > 0.4 ? '#3b82f6' : intensity > 0.2 ? '#93c5fd' : '#dbeafe';
        const textColor = intensity > 0.4 ? '#ffffff' : '#1e293b';
        return `<span class="heatmap-tag" style="background:${bgColor};color:${textColor};">${kw} (${count})</span>`;
    }).join('');
}

// ========================================
// Toast消息
// ========================================
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}
