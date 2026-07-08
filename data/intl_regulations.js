// ========================================
// 国际医疗器械法规数据库
// ========================================

const INTL_REGULATIONS = [
  {
    id: "INTL-001",
    title: "FDA 21 CFR Part 820 - Quality System Regulation (QSR)",
    number: "21 CFR Part 820",
    category: "国际法规",
    region: "美国",
    subRegion: "FDA",
    authority: "U.S. Food and Drug Administration (FDA)",
    publishDate: "1996-10-07",
    effectiveDate: "1997-06-01",
    status: "现行有效（2026年起将与ISO 13485融合为QMSR）",
    keywords: ["FDA", "QSR", "QMS", "质量体系", "GMP", "设计控制"],
    summary: "美国FDA医疗器械质量体系法规，规定了医疗器械设计、生产、包装、标签、储存、安装和服务的GMP要求。",
    content: `21 CFR Part 820 美国医疗器械质量体系法规（QSR/GMP）

Subpart A - General Provisions
820.1 Scope
820.3 Definitions
820.5 Quality system

Subpart B - Quality System Requirements
820.20 Management responsibility
820.22 Quality audit
820.25 Personnel

Subpart C - Design Controls
820.30 Design controls
- Design and development planning
- Design input
- Design output
- Design review
- Design verification
- Design validation
- Design transfer
- Design changes
- Design history file (DHF)

Subpart D - Document Controls
820.40 Document controls

Subpart E - Purchasing Controls
820.50 Purchasing controls

Subpart F - Identification and Traceability
820.60 Identification
820.65 Traceability

Subpart G - Production and Process Controls
820.70 Production and process controls
820.72 Inspection, measuring, and test equipment
820.75 Process validation

Subpart H - Acceptance Activities
820.80 Receiving, in-process, and finished device acceptance
820.86 Acceptance status

Subpart I - Nonconforming Product
820.90 Nonconforming product

Subpart J - Corrective and Preventive Action (CAPA)
820.100 Corrective and preventive action

Subpart K - Labeling and Packaging Control
820.120 Device labeling
820.130 Device packaging

Subpart L - Handling, Storage, Distribution, and Installation
820.140 Handling
820.150 Storage
820.160 Distribution
820.170 Installation

Subpart M - Records
820.180 General requirements
820.181 Device master record (DMR)
820.184 Device history record (DHR)
820.186 Quality system record (QSR)
820.198 Complaint files

Subpart N - Servicing
820.200 Servicing

Subpart O - Statistical Techniques
820.250 Statistical techniques

Note: FDA已于2024年发布最终规则，将于2026年2月2日起将QSR修订为质量管理体系法规（QMSR），与ISO 13485:2016基本接轨。`,
    url: "https://www.fda.gov/medical-devices"
  },
  {
    id: "INTL-002",
    title: "FDA 510(k) Premarket Notification",
    number: "21 CFR 807 Subpart E",
    category: "国际法规",
    region: "美国",
    subRegion: "FDA",
    authority: "U.S. Food and Drug Administration (FDA)",
    publishDate: "1976-05-28",
    effectiveDate: "1976-05-28",
    status: "现行有效",
    keywords: ["FDA", "510k", "上市前通知", "实质等同", "Premarket Notification"],
    summary: "FDA 510(k)上市前通知程序，要求证明拟上市器械与已合法上市的器械实质等同。",
    content: `510(k) Premarket Notification - 上市前通知

适用范围：
- 大多数Class II医疗器械
- 部分Class I和Class III医疗器械

实质等同性（Substantial Equivalence）判定标准：
1. 与predicate device具有相同的预期用途；且
2. 具有相同的技术特征；或
3. 具有不同的技术特征，但不会 raise different questions of safety and effectiveness，且有数据证明等同性。

510(k)提交文件内容：
1. Device description（器械描述）
2. Substantial equivalence comparison（实质等同性比较）
3. Proposed labeling（拟议标签）
4. Sterilization information（灭菌信息）
5. Nonclinical testing（非临床测试）
6. Clinical testing（如需要）
7. Software documentation（软件文档，如适用）
8. Biocompatibility evaluation（生物相容性评价）
9. Performance testing（性能测试）

510(k)类型：
- Traditional 510(k)
- Special 510(k) - 用于器械修改
- Abbreviated 510(k) - 利用FDA指南文件

审评时限：
- Traditional 510(k): 90天（FDA审评）
- Special 510(k): 30天

De Novo途径：
- 适用于新型低至中风险器械（无predicate device）
- Class I或Class II分类`,
    url: "https://www.fda.gov/medical-devices/premarket-notification-510k"
  },
  {
    id: "INTL-003",
    title: "FDA Premarket Approval Application (PMA)",
    number: "21 CFR Part 814",
    category: "国际法规",
    region: "美国",
    subRegion: "FDA",
    authority: "U.S. Food and Drug Administration (FDA)",
    publishDate: "1976-05-28",
    effectiveDate: "1976-05-28",
    status: "现行有效",
    keywords: ["FDA", "PMA", "上市前批准", "Class III", "高风险器械"],
    summary: "FDA PMA上市前批准申请，适用于高风险Class III医疗器械，是FDA最严格的上市前审查程序。",
    content: `PMA Premarket Approval Application - 上市前批准申请

适用范围：
- Class III高风险医疗器械
- 不能通过510(k)证明实质等同的器械
- 植入式器械、生命维持器械等

PMA申请内容：
1. Executive summary（摘要）
2. Device description（器械描述）
3. Manufacturing information（生产信息）
4. Nonclinical studies（非临床研究）
   - Bench testing
   - Animal studies
   - Biocompatibility
5. Clinical data（临床数据）
   - Clinical investigation plan
   - Clinical study reports
   - Statistical analysis
6. Labeling（标签和说明书）
7. Risk analysis（风险分析）

审评流程：
1. Administrative/IEC review (45 days)
2. Substantive review (90 days)
3. Interactive review phase
4. Panel review (如需要)
5. FDA decision (180 days total, may be extended)

PMA Supplemental Applications:
- PMA Supplement (重大变更)
- 30-Day Notice (一般变更)
- 180-Day Report (年度报告)

Post-Approval Requirements:
- Post-Approval Study (PAS)
- Annual Reports
- Adverse Event Reporting (MDR)`,
    url: "https://www.fda.gov/medical-devices/premarket-approval-pma"
  },
  {
    id: "INTL-004",
    title: "FDA De Novo Classification Request",
    number: "21 CFR 860 Subpart B",
    category: "国际法规",
    region: "美国",
    subRegion: "FDA",
    authority: "U.S. Food and Drug Administration (FDA)",
    publishDate: "1997-10-10",
    effectiveDate: "1997-10-10",
    status: "现行有效",
    keywords: ["FDA", "De Novo", "新型器械", "分类请求", "低中风险"],
    summary: "FDA De Novo分类请求，适用于无predicate device的新型低至中风险医疗器械。",
    content: `De Novo Classification Request - De Novo分类请求

适用条件：
- 新型医疗器械，无合法上市的predicate device
- 低至中等风险（Class I或Class II）
- 不能通过510(k)途径上市

De Novo申请流程：
1. 提交De Novo请求
2. FDA审查分类（Class I或Class II）
3. FDA在120个自然日内做出决定

De Novo申请内容：
1. Device description
2. Classification recommendation
3. Performance data
4. Risk analysis
5. Labeling
6. Comparison with other devices

De Novo批准后的意义：
- 创建新的predicate device
- 后续同类器械可通过510(k)上市
- 建立新的器械分类

两种路径：
1. Direct De Novo: 直接提交De Novo请求
2. After 510(k) NSE: 510(k)被判定Not Substantially Equivalent后提交`,
    url: "https://www.fda.gov/medical-devices/device-advice-classifying-your-device/de-novo-classification-process"
  },
  {
    id: "INTL-005",
    title: "FDA 21 CFR Part 812 - Investigational Device Exemption (IDE)",
    number: "21 CFR Part 812",
    category: "国际法规",
    region: "美国",
    subRegion: "FDA",
    authority: "U.S. Food and Drug Administration (FDA)",
    publishDate: "1980-07-21",
    effectiveDate: "1980-07-21",
    status: "现行有效",
    keywords: ["FDA", "IDE", "临床试验豁免", "临床研究", "试验器械"],
    summary: "FDA IDE法规，规范在美国进行医疗器械临床试验的要求。",
    content: `21 CFR Part 812 - Investigational Device Exemption (IDE)

适用范围：
- 用于临床试验的器械
- 非豁免器械需要获得IDE批准

器械分类：
1. Non-significant risk (NSR) devices:
   - 不构成重大风险的器械
   - 不需要FDA IDE批准
   - 仅需IRB批准

2. Significant risk (SR) devices:
   - 可能对健康、安全或福利构成重大风险
   - 植入器械
   - 支持或维持人生命
   - 对诊断、治愈、治疗、预防疾病具有重要性
   - 否则可能构成重大风险
   - 需要FDA IDE批准和IRB批准

IDE申请内容：
1. Device description
2. Prior investigations
3. Risk analysis
4. Investigator's brochure
5. Clinical investigation plan (protocol)
6. Informed consent materials
7. IRB information
8. Manufacturing information
9. Environmental impact

临床试验要求：
- Informed consent（知情同意）
- IRB approval（伦理委员会批准）
- Monitoring（监查）
- Records and reports（记录和报告）
- Adverse event reporting（不良事件报告）`,
    url: "https://www.fda.gov/medical-devices/device-advice-investigational-device-exemption-ide"
  },
  {
    id: "INTL-006",
    title: "EU MDR - Medical Device Regulation (EU) 2017/745",
    number: "Regulation (EU) 2017/745",
    category: "国际法规",
    region: "欧盟",
    subRegion: "EU",
    authority: "European Commission",
    publishDate: "2017-04-05",
    effectiveDate: "2021-05-26",
    status: "现行有效",
    keywords: ["EU", "MDR", "欧盟", "医疗器械法规", "CE认证", "Notified Body"],
    summary: "欧盟医疗器械法规（MDR），取代旧版指令MDD(93/42/EEC)，大幅提高了医疗器械的安全和性能要求。",
    content: `EU MDR - Regulation (EU) 2017/745

核心变化（相比MDD指令）：
1. 从指令升级为法规，直接适用于所有成员国
2. 扩大适用范围（含非医疗用途产品、纳米材料等）
3. 加强临床证据要求
4. 强化上市后监管
5. 引入EUDAMED数据库
6. 严格Notified Body监管
7. UDI系统强制要求
8. 强化植入器械专项要求

风险分类：
- Class I（低风险）：自我声明
- Class IIa（中低风险）：Notified Body评估
- Class IIb（中高风险）：Notified Body评估
- Class III（高风险）：Notified Body评估

CE认证流程：
1. Class I:
   - 自我声明（除测量、灭菌、复用外科器械需NB评估）
   - 编制技术文件
   - 签署EU DoC

2. Class IIa:
   - Notified Body评估技术文件（至少一个典型产品）
   - 质量管理体系审核
   - 签署EU DoC

3. Class IIb/III:
   - Notified Body评估全部技术文件
   - 质量管理体系审核
   - 签署EU DoC

技术文件内容：
1. Device description and specification
2. Information supplied with the device
3. Information to be supplied to the user
4. Risk management
5. Clinical evaluation
6. Post-market surveillance plan
7. Notified Body assessment (如适用)

临床评价：
- 所有器械均需临床评价
- 基于临床数据、临床试验或等同性
- 定期更新（PMCF）

植入器械特殊要求：
- 植入卡
- 植入登记
- 上市后临床随访（PMCF）
- 定期安全更新报告（PSUR）

EUDAMED数据库：
- 注册信息
- UDI信息
- 证书信息
- 不良事件报告
- 临床调查信息

Article 120 过渡期：
- MDD证书过渡期至2027年12月31日
- AIMDD证书过渡期至2027年12月31日
- 需满足特定条件（无重大变更、安全有效、2021年5月26日前签订协议）`,
    url: "https://health.ec.europa.eu/medical-devices-sector/new-regulations_en"
  },
  {
    id: "INTL-007",
    title: "EU IVDR - In Vitro Diagnostic Regulation (EU) 2017/746",
    number: "Regulation (EU) 2017/746",
    category: "国际法规",
    region: "欧盟",
    subRegion: "EU",
    authority: "European Commission",
    publishDate: "2017-04-05",
    effectiveDate: "2022-05-26",
    status: "现行有效",
    keywords: ["EU", "IVDR", "体外诊断试剂", "IVD", "CE认证"],
    summary: "欧盟体外诊断试剂法规，取代旧版指令IVDD(98/79/EC)，大幅提高了IVD产品的监管要求。",
    content: `EU IVDR - Regulation (EU) 2017/746

核心变化（相比IVDD指令）：
1. 约80%的IVD产品需要Notified Body评估（旧指令仅约20%）
2. 引入伴随诊断(Companion Diagnostics)概念
3. 强化临床证据要求
4. 引入EUDAMED数据库
5. UDI系统强制要求
6. 严格性能评价要求

风险分类：
- Class A（低风险）：自我声明（如一般用途的缓冲液、洗涤液等）
- Class B（中低风险）：Notified Body评估
- Class C（中高风险）：Notified Body评估
- Class D（高风险）：Notified Body评估 + 参考实验室验证

Class D示例：
- 血型分型试剂
- HIV/HBV/HCV检测试剂
-COVID-19检测试剂（部分）

伴随诊断（CDx）:
- 对于药品选择至关重要的IVD
- 需与药品上市许可持有人协商
- 需Notified Body咨询药品主管机构后评估

性能评价要求：
- Scientific validity（科学有效性）
- Analytical performance（分析性能）
- Clinical performance（临床性能）

EUDAMED数据库要求：
- 注册信息
- UDI信息
- 证书信息
- 不良事件报告
- 性能研究信息

过渡期安排：
- IVDD证书过渡期至2027年12月31日
- 需满足特定条件`,
    url: "https://health.ec.europa.eu/medical-devices-sector/new-regulations_en"
  },
  {
    id: "INTL-008",
    title: "ISO 13485:2016 - Medical Devices Quality Management Systems",
    number: "ISO 13485:2016",
    category: "国际标准",
    region: "国际",
    subRegion: "ISO",
    authority: "International Organization for Standardization (ISO)",
    publishDate: "2016-03-01",
    effectiveDate: "2016-03-01",
    status: "现行有效",
    keywords: ["ISO", "13485", "质量管理体系", "QMS", "国际标准"],
    summary: "国际通用的医疗器械质量管理体系标准，是医疗器械GMP的国际基准。",
    content: `ISO 13485:2016 Medical devices — Quality management systems — Requirements for regulatory purposes

第4章 质量管理体系
4.1 总要求
4.2 文件要求
- 质量手册
- 医疗器械文档
- 文件控制
- 记录控制

第5章 管理职责
5.1 管理承诺
5.2 以顾客为关注焦点
5.3 质量方针
5.4 策划
5.5 职责、权限和沟通
5.6 管理评审

第6章 资源管理
6.1 资源提供
6.2 人力资源
6.3 基础设施
6.4 工作环境
6.5 监视和测量装置控制

第7章 产品实现
7.1 产品实现的策划
7.2 与顾客有关的过程
7.3 设计和开发
- 设计输入
- 设计输出
- 设计评审
- 设计验证
- 设计确认
- 设计转换
- 设计变更
- 设计文档(DHF)
7.4 采购
7.5 生产和服务提供
- 生产控制
- 灭菌过程确认
- 标识和可追溯性
- 顾客财产
- 产品防护
7.6 监视和测量装置控制

第8章 测量、分析和改进
8.1 总则
8.2 监视和测量
- 反馈
- 投诉处理
- 内部审核
8.3 不合格品控制
8.4 数据分析
8.5 改进
- 纠正措施(CAPA)
- 预防措施

与FDA QSR的关系：
FDA已于2024年发布最终规则，将于2026年2月起将QSR修订为QMSR，与ISO 13485:2016基本接轨。
QMSR = ISO 13485:2016 + 820.35 (traceability) + 820.140 (installation) + 820.186 (QSR record)`,
    url: "https://www.iso.org/standard/59752.html"
  },
  {
    id: "INTL-009",
    title: "ISO 14971:2019 - Risk Management for Medical Devices",
    number: "ISO 14971:2019",
    category: "国际标准",
    region: "国际",
    subRegion: "ISO",
    authority: "International Organization for Standardization (ISO)",
    publishDate: "2019-12-01",
    effectiveDate: "2019-12-01",
    status: "现行有效",
    keywords: ["ISO", "14971", "风险管理", "风险评估", "风险控制"],
    summary: "国际通用的医疗器械风险管理标准，是所有医疗器械上市必须遵循的风险管理框架。",
    content: `ISO 14971:2019 Medical devices — Application of risk management to medical devices

风险管理过程：

1. 风险管理计划
   - 风险管理活动范围
   - 职责分工
   - 风险可接受性准则
   - 验证活动
   - 评审活动

2. 风险分析
   - 预期用途和合理可预见的误用识别
   - 医疗器械特征识别
   - 危害和危险情况识别
   - 风险估计（P×S）

3. 风险评价
   - 将估计的风险与可接受性准则比较
   - 决定是否需要风险控制

4. 风险控制
   - 设计控制（Inherently safe design）
   - 保护措施（Protective measures）
   - 安全信息（Safety information）
   - 验证风险控制措施的有效性

5. 综合剩余风险评价
   - 评估所有剩余风险的综合影响
   - 与受益比较

6. 风险管理评审
   - 评审风险管理活动的完整性
   - 确保剩余风险可接受

7. 生产和生产后信息收集
   - 收集生产和生产后的信息
   - 如有新信息，更新风险管理活动

风险管理文档：
- 风险管理计划
- 风险管理报告
- 风险分析记录（FMEA等）

常用风险分析工具：
- FMEA (Failure Mode and Effects Analysis)
- FTA (Fault Tree Analysis)
- HAZOP (Hazard and Operability Study)
- UseFMEA (Use Error Analysis)`,
    url: "https://www.iso.org/standard/72704.html"
  },
  {
    id: "INTL-010",
    title: "ISO 10993 - Biological Evaluation of Medical Devices",
    number: "ISO 10993 (系列标准)",
    category: "国际标准",
    region: "国际",
    subRegion: "ISO",
    authority: "International Organization for Standardization (ISO)",
    publishDate: "1992-01-01",
    effectiveDate: "持续更新",
    status: "现行有效",
    keywords: ["ISO", "10993", "生物相容性", "生物学评价", "细胞毒性", "致敏"],
    summary: "医疗器械生物学评价系列国际标准，涵盖生物相容性测试的全部要求。",
    content: `ISO 10993 系列标准概览：

ISO 10993-1: Evaluation and testing within a risk management process
- 总则：基于风险管理过程的评价和试验
- 分类（接触性质、接触时间、接触部位）

ISO 10993-2: Animal welfare requirements
- 动物福利要求

ISO 10993-3: Tests for genotoxicity, carcinogenicity and reproductive toxicity
- 遗传毒性、致癌性和生殖毒性试验

ISO 10993-4: Selection of tests for interactions with blood
- 血液相互作用试验选择

ISO 10993-5: Tests for in vitro cytotoxicity
- 体外细胞毒性试验

ISO 10993-6: Tests for local effects after implantation
- 植入后局部反应试验

ISO 10993-7: Ethylene oxide sterilization residuals
- 环氧乙烷灭菌残留量

ISO 10993-10: Tests for irritation and skin sensitization
- 刺激和皮肤致敏试验

ISO 10993-11: Tests for systemic toxicity
- 全身毒性试验

ISO 10993-12: Sample preparation and reference materials
- 样品制备和标准物质

ISO 10993-18: Chemical characterization of materials
- 材料化学表征

ISO 10993-23: Tests for irritation
- 刺激试验

评价终点选择矩阵：
┌─────────────┬──────────┬──────────┬──────────┐
│ 接触时间     │ 表面接触  │ 外部接入  │ 植入     │
├─────────────┼──────────┼──────────┼──────────┤
│ 短期(≤24h)  │ 基本评价  │ 基本评价  │ 基本评价  │
│             │ +刺激    │ +急性毒性 │ +植入试验 │
├─────────────┼──────────┼──────────┼──────────┤
│ 长期(24h-30d)│ 基本评价  │ 基本评价  │ 基本评价  │
│             │ +亚慢性  │ +亚慢性   │ +亚慢性   │
│             │          │ +植入     │ +植入     │
├─────────────┼──────────┼──────────┼──────────┤
│ 持久(>30d)  │ 基本评价  │ 基本评价  │ 基本评价  │
│             │ +慢性    │ +慢性     │ +慢性     │
│             │          │ +植入     │ +植入     │
└─────────────┴──────────┴──────────┴──────────┘

基本评价终点：
1. 细胞毒性（ISO 10993-5）
2. 致敏（ISO 10993-10）
3. 刺激（ISO 10993-10/23）
4. 急性全身毒性（ISO 10993-11）
5. 材料介导致热性

补充评价终点：
1. 亚慢性毒性
2. 遗传毒性（ISO 10993-3）
3. 植入（ISO 10993-6）
4. 血液相容性（ISO 10993-4）`,
    url: "https://www.iso.org/standard/68436.html"
  },
  {
    id: "INTL-011",
    title: "ISO 11607 - Packaging for Terminally Sterilized Medical Devices",
    number: "ISO 11607 (系列标准)",
    category: "国际标准",
    region: "国际",
    subRegion: "ISO",
    authority: "International Organization for Standardization (ISO)",
    publishDate: "2019-02-01",
    effectiveDate: "2019-02-01",
    status: "现行有效",
    keywords: ["ISO", "11607", "包装", "灭菌包装", "无菌屏障"],
    summary: "最终灭菌医疗器械包装系列标准，规范无菌屏障系统的设计和验证。",
    content: `ISO 11607-1: Design and validation requirements for materials, sterile barrier systems and packaging systems
- 材料、无菌屏障系统和包装系统的设计和验证要求

ISO 11607-2: Validation requirements for forming, sealing and assembly processes
- 成型、密封和装配过程的验证要求

关键概念：
- Sterile Barrier System (SBS): 无菌屏障系统
- Protective packaging: 保护性包装
- Packaging system: 包装系统

验证要求：
1. 材料性能验证
2. 密封/闭合完整性验证
3. 微生物屏障验证
4. 运输模拟验证
5. 加速老化/实时老化验证
6. 过程验证（安装确认IQ、运行确认OQ、性能确认PQ）

相关标准：
- ASTM F88: 密封强度测试
- ASTM F1929: 目视检测缺陷
- ASTM F2096: 无菌屏障完整性测试（气泡法）
- EN 868: 灭菌包装材料标准`,
    url: "https://www.iso.org/standard/70351.html"
  },
  {
    id: "INTL-012",
    title: "ISO 62366 - Usability Engineering Application",
    number: "IEC 62366-1:2015 + A1:2020",
    category: "国际标准",
    region: "国际",
    subRegion: "IEC",
    authority: "International Electrotechnical Commission (IEC)",
    publishDate: "2015-02-12",
    effectiveDate: "2015-02-12",
    status: "现行有效",
    keywords: ["IEC", "62366", "可用性工程", "人因工程", "Use Error"],
    summary: "医疗器械可用性工程标准，规范医疗器械的人因工程设计和评价。",
    content: `IEC 62366-1:2015 Medical devices — Part 1: Application of usability engineering to medical devices

可用性工程过程：

1. 用户界面规范
   - Primary operating functions
   - 识别用户界面安全特性

2. 使用规范
   - 预期用户
   - 预期使用环境
   - 预期用途

3. 危险相关使用场景识别
   - 合理可预见的误用
   - 使用错误
   - 使用困难

4. 用户界面评价
   - Formative evaluation (形成性评价)
   - Summative evaluation (总结性评价)

5. 可用性工程文档
   - Usability Engineering Plan
   - Usability Engineering File
   - Summative Evaluation Report

关键定义：
- Use Error: 使用错误（非故障导致的不当使用）
- Abnormal Use: 异常使用（故意不当使用）
- Usability: 可用性

总结性评价要求：
- 至少15名代表性用户
- 涵盖关键任务
- 模拟真实使用环境
- 记录所有使用错误和困难`,
    url: "https://webstore.iec.ch/publication/24635"
  },
  {
    id: "INTL-013",
    title: "ISO 14155 - Clinical Investigation of Medical Devices",
    number: "ISO 14155:2020",
    category: "国际标准",
    region: "国际",
    subRegion: "ISO",
    authority: "International Organization for Standardization (ISO)",
    publishDate: "2020-07-01",
    effectiveDate: "2020-07-01",
    status: "现行有效",
    keywords: ["ISO", "14155", "临床研究", "临床试验", "GCP"],
    summary: "医疗器械临床研究国际标准，规范人体临床试验的设计、实施和报告。",
    content: `ISO 14155:2020 Clinical investigation of medical devices for human subjects — Good clinical practice

主要内容：

1. 伦理考虑
   - Declaration of Helsinki
   - 知情同意
   - 伦理委员会审查

2. 临床调查方案
   - 研究目标
   - 研究设计
   - 入选/排除标准
   - 统计考虑
   - 数据管理
   - 不良事件定义和报告

3. 临床调查实施
   - 监查
   - 数据收集和记录
   - 偏差管理

4. 临床调查报告
   - 结果报告
   - 统计分析
   - 不良事件总结

5. 责任分工
   - Sponsor职责
   - Investigator职责
   - Monitor职责
   - 伦理委员会职责

与GCP的关系：
ISO 14155是医疗器械领域的GCP标准，与FDA IDE和EU MDR临床试验要求基本一致。`,
    url: "https://www.iso.org/standard/71690.html"
  },
  {
    id: "INTL-014",
    title: "IEC 60601-1 - Medical Electrical Equipment Safety",
    number: "IEC 60601-1:2005 + A1:2012 + A2:2020",
    category: "国际标准",
    region: "国际",
    subRegion: "IEC",
    authority: "International Electrotechnical Commission (IEC)",
    publishDate: "2005-12-01",
    effectiveDate: "2020-08-20",
    status: "现行有效",
    keywords: ["IEC", "60601", "电气安全", "医用电气设备", "EMC"],
    summary: "医用电气设备安全国际标准，是所有有源医疗器械的安全基本要求。",
    content: `IEC 60601-1:2005 + A1:2012 + A2:2020 Medical electrical equipment — Part 1: General requirements for basic safety and essential performance

适用范围：
- 医用电气设备（MEE）
- 医用电气系统（MES）

主要内容：
1. 电气安全
   - 患者漏电流限制
   - 接地保护
   - 绝缘要求

2. 机械安全
   - 机械强度
   - 运动部件防护

3. 热安全
   - 温度限制
   - 防火要求

4. 辐射安全
   - 辐射防护
   - 激光安全

5. 基本性能
   - 定义器械的基本性能
   - 验证基本性能在正常和单一故障状态下保持

6. 风险管理
   - 与ISO 14971结合

附属标准（Particular Standards, -2系列）：
- IEC 60601-2-2: 高频电刀
- IEC 60601-2-4: 心脏除颤器
- IEC 60601-2-10: 神经肌肉刺激器
- IEC 60601-2-11: 病床
- IEC 60601-2-16: 血液透析设备
- IEC 60601-2-26: 脑电图机
- IEC 60601-2-30: 无创血压监测
- IEC 60601-2-49: 多参数患者监护

并列标准（Collateral Standards, -1系列）：
- IEC 60601-1-2: 电磁兼容（EMC）
- IEC 60601-1-3: 辐射防护
- IEC 60601-1-6: 可用性
- IEC 60601-1-8: 报警系统
- IEC 60601-1-10: 生理闭环控制器
- IEC 60601-1-12: 急救转运设备`,
    url: "https://webstore.iec.ch/publication/2603"
  },
  {
    id: "INTL-015",
    title: "IEC 62304 - Medical Device Software Lifecycle",
    number: "IEC 62304:2006 + A1:2015",
    category: "国际标准",
    region: "国际",
    subRegion: "IEC",
    authority: "International Electrotechnical Commission (IEC)",
    publishDate: "2006-05-10",
    effectiveDate: "2015-06-23",
    status: "现行有效",
    keywords: ["IEC", "62304", "软件", "软件生命周期", "软件安全等级"],
    summary: "医疗器械软件生命周期国际标准，规范软件开发、维护和风险管理。",
    content: `IEC 62304:2006 + A1:2015 Medical device software — Software life cycle processes

软件安全等级（Safety Classification）：
- Class A: 不可能导致伤害（no injury or damage could result）
- Class B: 可能导致非严重伤害（non-serious injury）
- Class C: 可能导致死亡或严重伤害（death or serious injury）

软件生命周期过程：

1. 软件开发计划
   - 软件开发计划(SDP)
   - 软件配置管理
   - 问题解决

2. 软件需求分析
   - 软件需求规格说明(SRS)

3. 软件架构设计
   - 软件架构设计文档
   - SOUP(Software of Unknown Provenance)选择
   - 软件项目分割

4. 软件详细设计
   - 软件详细设计文档
   - SOUP详细设计

5. 软件单元实现和验证
   - 编码
   - 单元测试（Class B, C要求）

6. 软件集成和集成测试
   - 集成计划
   - 集成测试（Class B, C要求）

7. 软件系统测试
   - 系统测试（Class B, C要求）

8. 软件发布

软件维护过程：
- 问题识别
- 问题分析
- 变更实施
- 变更验证
- 变更确认

不同安全等级的要求：
┌──────────────┬─────────┬─────────┬─────────┐
│ 活动         │ Class A │ Class B │ Class C │
├──────────────┼─────────┼─────────┼─────────┤
│ 软件开发计划 │ ✓       │ ✓       │ ✓       │
│ 软件需求分析 │ ✓       │ ✓       │ ✓       │
│ 架构设计     │ ✓       │ ✓       │ ✓       │
│ 详细设计     │ —       │ ✓       │ ✓       │
│ 单元测试     │ —       │ ✓       │ ✓       │
│ 集成测试     │ —       │ ✓       │ ✓       │
│ 系统测试     │ —       │ ✓       │ ✓       │
│ 风险管理     │ ✓       │ ✓       │ ✓       │
│ 问题解决     │ ✓       │ ✓       │ ✓       │
│ 配置管理     │ ✓       │ ✓       │ ✓       │
└──────────────┴─────────┴─────────┴─────────┘`,
    url: "https://webstore.iec.ch/publication/6025"
  },
  {
    id: "INTL-016",
    title: "IMDRF - Medical Device Single Audit Program (MDSAP)",
    number: "IMDRF MDSAP",
    category: "国际法规",
    region: "国际",
    subRegion: "IMDRF",
    authority: "International Medical Device Regulators Forum (IMDRF)",
    publishDate: "2014-01-01",
    effectiveDate: "2014-01-01",
    status: "现行有效",
    keywords: ["IMDRF", "MDSAP", "单一审核", "多国审核", "监管互认"],
    summary: "医疗器械单一审核程序，一次审核满足多个国家监管要求。",
    content: `MDSAP - Medical Device Single Audit Program

参与国家/地区：
1. 澳大利亚 TGA
2. 巴西 ANVISA
3. 加拿大 Health Canada
4. 日本 MHLW/PMDA
5. 美国 FDA

核心原则：
一次质量管理体系审核满足五个参与国家的监管要求。

审核范围：
基于ISO 13485:2016，加上各国的特定监管要求。

审核阶段：
1. Stage 1 Audit (文件审核)
2. Stage 2 Audit (现场审核)
3. Surveillance Audits (年度监督审核)
4. Recertification Audit (再认证审核)

审核模块：
1. MEDDEV 2.5/1 - 设备不良事件报告
2. PMS (上市后监督)
3. 投诉处理
4. 召回

MDSAP审核报告：
- 由认可的Auditing Organization签发
- 在5个参与国家中互认
- 有效期3年

优势：
- 一次审核覆盖多国市场
- 降低重复审核成本
- 提升质量管理体系水平`,
    url: "https://www.imdrf.org"
  },
  {
    id: "INTL-017",
    title: "IMDRF Essential Principles of Safety and Performance",
    number: "IMDRF/GRRP WG/N47",
    category: "国际法规",
    region: "国际",
    subRegion: "IMDRF",
    authority: "International Medical Device Regulators Forum (IMDRF)",
    publishDate: "2018-03-09",
    effectiveDate: "2018-03-09",
    status: "现行有效",
    keywords: ["IMDRF", "Essential Principles", "基本原则", "安全有效"],
    summary: "IMDRF医疗器械安全有效基本原则，为全球医疗器械监管提供统一的安全有效要求框架。",
    content: `IMDRF Essential Principles of Safety and Performance of Medical Devices and IVD Medical Devices

Part A: General Principles
A1 设计和生产应当消除或降低风险
A2 风险-受益分析
A3 正常使用和单一故障状态安全
A4 运输和储存
A5 环境影响
A6 操作人员安全
A7 临床评价
A8 基于风险管理的验证与确认

Part B: General Principles Regarding Design and Construction
B1 化学、物理和生物学性质
B2 感染和微生物污染
B3 含生物源材料的器械
B4 构建/环境特性
B5 具有测量功能的器械
B6 辐射防护
B7 连接到或装配到其他器械的器械
B8 非专业使用的器械
B9 含有放射性物质的器械
B10 非电离辐射
B11 交互软件和信息
B12 电磁兼容性
B13 机械和热风险
B14 提供给患者的能量或物质
B15 保护使用者安全的器械
B16 含有动物源材料的器械
B17 无菌提供器械的微生物控制
B18 标签和说明书
B19 动物源性器械的TSE安全
B20 影像辐射剂量优化
B21 电气安全
B22 含纳米材料的器械
B23 含药用物质的器械
B24 含血制品的器械
B25 吸入或鼻内给药器械
B26 外科侵入性器械

Part C: IVD Specific Principles
C1 化学、物理和生物学性质
C2 分析和临床性能
C3 校准品/质控品溯源性
C4 伴随诊断
C5 自测IVD`,
    url: "https://www.imdrf.org/documents"
  },
  {
    id: "INTL-018",
    title: "Japan PMD Act - Pharmaceuticals and Medical Devices Act",
    number: "Act No. 145 of 1960 (as amended 2014)",
    category: "国际法规",
    region: "日本",
    subRegion: "PMDA",
    authority: "Ministry of Health, Labour and Welfare (MHLW) / PMDA",
    publishDate: "2014-11-25",
    effectiveDate: "2014-11-25",
    status: "现行有效",
    keywords: ["日本", "PMDA", "PMD Act", "药械法", "JMDN"],
    summary: "日本药械法（PMD Act），规范日本医疗器械的注册、生产、经管和使用。",
    content: `Japan PMD Act (Pharmaceuticals and Medical Devices Act)

医疗器械分类：
- Class I (一般医療機器): 最低风险，自行认证
- Class II (管理医療機器): 中等风险，第三方认证
- Class III (高度管理医療機器): 高风险，MHLW批准
- Class IV (高度管理医療機器): 最高风险，MHLW批准

上市路径：
1. Class I:
   - 自行认证（自己認証）
   - 向PMDA备案

2. Class II (指定管理医療機器以外):
   - 第三方认证（第三者認証）
   - Registered Certification Body (RCB)

3. Class II (指定管理医療機器) / Class III / Class IV:
   - MHLW批准（承認）
   - PMDA审评

审批时限：
- 承認（PMDA审评）: 通常12个月
- 認証（第三方认证）: 通常4-6个月

Japanese Medical Device Nomenclature (JMDN):
- 类似FDA产品代码或EU GMDN
- 对应分类

QMS要求：
- 基于ISO 13485
- MHLW Ordinance No.169

上市后监管：
- 不良事件报告
- 再审查制度（Re-examination）
- 再评价制度（Re-evaluation）`,
    url: "https://www.pmda.go.jp/english/"
  },
  {
    id: "INTL-019",
    title: "Australia TGA - Medical Devices Regulations",
    number: "Therapeutic Goods (Medical Devices) Regulations 2002",
    category: "国际法规",
    region: "澳大利亚",
    subRegion: "TGA",
    authority: "Therapeutic Goods Administration (TGA)",
    publishDate: "2002-05-23",
    effectiveDate: "2002-05-23",
    status: "现行有效",
    keywords: ["澳大利亚", "TGA", "医疗器械法规", "ARTG"],
    summary: "澳大利亚医疗器械法规，规范TGA医疗器械注册和监管。",
    content: `Australia TGA Medical Devices Regulations

分类：
- Class I: 自行备案
- Class I (sterile/measuring): TGA评估
- Class IIa/IIb: TGA评估
- Class III: TGA评估
- AIMD: TGA评估

上市路径：
1. Class I (非灭菌非测量):
   - 自行备案至ARTG (Australian Register of Therapeutic Goods)
   - 不需要TGA审核

2. Class I (灭菌/测量) / IIa / IIb / III:
   - TGA审核技术文件
   - QMS审核
   - 列入ARTG

基本安全与性能要求（Essential Principles）:
- 与IMDRF/GHTF基本一致

与EU MDR的关系：
- TGA认可欧盟CE认证
- 持有CE证书可简化TGA注册流程
- Conformity Assessment Certificate

MDSAP:
- 澳大利亚是MDSAP参与国
- MDSAP审核可满足QMS要求

TGA审核时限：
- Class I: 即时
- Class IIa/IIb: 约6-8个月
- Class III: 约12-18个月`,
    url: "https://www.tga.gov.au/medical-devices"
  },
  {
    id: "INTL-020",
    title: "Canada Health Canada - Medical Devices Regulations",
    number: "SOR/98-282",
    category: "国际法规",
    region: "加拿大",
    subRegion: "Health Canada",
    authority: "Health Canada",
    publishDate: "1998-05-01",
    effectiveDate: "1998-05-01",
    status: "现行有效",
    keywords: ["加拿大", "Health Canada", "MDL", "MDEL", "医疗器械法规"],
    summary: "加拿大医疗器械法规，规范医疗器械上市许可和生产许可。",
    content: `Canada Medical Devices Regulations (SOR/98-282)

分类：
- Class I: 最低风险
- Class II: 低风险
- Class III: 中等风险
- Class IV: 最高风险

上市许可：
1. Medical Device Licence (MDL):
   - Class II, III, IV 需要MDL
   - Class I 不需要MDL（需MDEL）

2. Medical Device Establishment Licence (MDEL):
   - 所有制造商和进口商/分销商需要MDEL
   - Class I制造商也需要MDEL

MDL申请流程：
- Class II: 自行申报或通过第三方
- Class III/IV: Health Canada审核

MDSAP:
- 加拿大是MDSAP参与国
- 所有Class II-IV器械制造商必须通过MDSAP审核

技术文件要求：
- Safety and Effectiveness Evidence
- Labeling
- Quality Management System (MDSAP)

审核时限：
- Class II: 15天
- Class III: 75天
- Class IV: 90天

特殊路径：
- Expedited Access Pathway: 紧急需求产品
- Priority Review: 威胁生命的产品`,
    url: "https://www.canada.ca/en/health-canada"
  },
  {
    id: "INTL-021",
    title: "WHO Medical Device Guidance Documents",
    number: "WHO Medical Device Series",
    category: "国际指南",
    region: "国际",
    subRegion: "WHO",
    authority: "World Health Organization (WHO)",
    publishDate: "2003-01-01",
    effectiveDate: "持续更新",
    status: "现行有效",
    keywords: ["WHO", "世界卫生组织", "指南", "全球医疗器械"],
    summary: "WHO医疗器械指导文件，为全球特别是发展中国家提供医疗器械监管指导。",
    content: `WHO Medical Device Guidance Documents

主要文件：

1. Global Model Regulatory Framework (GMRF):
   - 为发展中国家提供医疗器械监管框架
   - 包含全生命周期监管要素

2. WHO Medical Device Information System (MEDEVIS):
   - 全球医疗器械信息平台
   - 产品分类、命名

3. WHO Prequalification of In Vitro Diagnostics:
   - IVD产品预认证
   - 重点针对体外诊断试剂

4. Medical Device donations:
   - 医疗器械捐赠指南

5. WHO guidelines for regulatory audits:
   - 监管审计指南

6. WHO Medical Device Nomenclature:
   - 国际医疗器械命名系统

7. WHO Policy on Selection of Medical Devices:
   - 医疗器械选择政策

8. WHO guidance on post-market surveillance:
   - 上市后监管指南

9. WHO Medical Device Innovation:
   - 医疗器械创新指导

10. WHO Essential Diagnostics List (EDL):
    - 基本诊断试剂清单

GMRF核心要素：
1. 市场准入
2. 注册和备案
3. 分类
4. 临床评价
5. 质量管理
6. 上市后监管
7. 不良事件报告
8. 生命周期管理`,
    url: "https://www.who.int/health-topics/medical-devices"
  },
  {
    id: "INTL-022",
    title: "WHO Global Model Regulatory Framework for Medical Devices",
    number: "WHO/BS/2023.2437",
    category: "国际指南",
    region: "国际",
    subRegion: "WHO",
    authority: "World Health Organization (WHO)",
    publishDate: "2023-01-01",
    effectiveDate: "2023-01-01",
    status: "现行有效",
    keywords: ["WHO", "GMRF", "全球监管框架", "监管模式"],
    summary: "WHO全球医疗器械监管模式框架，为各国建立医疗器械监管体系提供指导。",
    content: `WHO Global Model Regulatory Framework for Medical Devices (GMRF)

目的：
为尚未建立完善医疗器械监管体系的国家提供参考框架，帮助建立和加强医疗器械监管能力。

核心要素：

1. 法规框架基础
   - 法律基础
   - 监管机构职责
   - 国际协调

2. 产品分类
   - 基于风险分类
   - 分类原则

3. 市场准入
   - 注册/备案要求
   - 技术文件
   - 临床评价

4. 质量管理
   - QMS要求
   - 体系核查

5. 上市后监管
   - 不良事件监测
   - 召回
   - 上市后评价

6. 监管工具
   - 分类
   - 标准
   - 指导原则

7. 国际协调
   - IMDRF协调
   - 互认协议
   - 依赖机制（Reliance）

8. 特殊产品
   - 软件医疗器械
   - AI医疗器械
   - 个性化器械
   - IVD

9. 生命周期管理
   - 设计开发
   - 生产
   - 临床使用
   - 退市`,
    url: "https://www.who.int/publications"
  },
  {
    id: "INTL-023",
    title: "FDA Medical Device Reporting (MDR) - 21 CFR 803",
    number: "21 CFR Part 803",
    category: "国际法规",
    region: "美国",
    subRegion: "FDA",
    authority: "U.S. Food and Drug Administration (FDA)",
    publishDate: "1995-12-11",
    effectiveDate: "1995-12-11",
    status: "现行有效",
    keywords: ["FDA", "MDR", "不良事件报告", "上市后报告"],
    summary: "FDA医疗器械不良事件报告法规，要求制造商、进口商和使用单位报告医疗器械相关的不良事件。",
    content: `21 CFR Part 803 - Medical Device Reporting (MDR)

报告主体：
1. Device Manufacturers (制造商)
2. Importers (进口商)
3. Device User Facilities (使用机构)

报告类型：

1. Death and Serious Injury Reports:
   - 制造商/进口商：获知后30个工作日内报告FDA
   - 使用机构：死亡事件10天内报告FDA
   - 使用机构：严重伤害事件10天内报告制造商（或FDA如果制造商未知）

2. Malfunction Reports:
   - 制造商：器械故障可能导致死亡或严重伤害时，30个工作日内报告
   - 进口商不需要报告Malfunction

3. Annual Certification:
   - 制造商每年提交认证

MDR报告流程：
1. 获知不良事件
2. 评估事件（是否需要报告）
3. 提交eMDR报告
4. 记录保留

报告标准：
- Death（死亡）: 必须报告
- Serious Injury（严重伤害）: 必须报告
  - 危及生命
  - 造成永久性损害/功能丧失
  - 需要医学干预
  - 需要住院或延长住院
- Malfunction（故障）: 如可能导致死亡或严重伤害则报告

报告途径：
- eMDR电子报告系统
- MedWatch 3500A表
- MedWatch 3500表（自愿报告）`,
    url: "https://www.fda.gov/medical-devices/medical-device-safety/medical-device-reporting-mdr-how-report-medical-device-related-problems"
  },
  {
    id: "INTL-024",
    title: "FDA Unique Device Identification (UDI) - 21 CFR 830",
    number: "21 CFR Part 830",
    category: "国际法规",
    region: "美国",
    subRegion: "FDA",
    authority: "U.S. Food and Drug Administration (FDA)",
    publishDate: "2013-09-24",
    effectiveDate: "2013-09-24",
    status: "现行有效",
    keywords: ["FDA", "UDI", "唯一标识", "追溯", "GUDID"],
    summary: "FDA医疗器械唯一标识法规，要求医疗器械标注UDI并提交至GUDID数据库。",
    content: `21 CFR Part 830 - Unique Device Identification

UDI组成：
1. Device Identifier (DI): 产品标识（固定）
2. Production Identifier (PI): 生产标识（可变，如批号、序列号、效期、生产日期）

UDI签发机构（FDA认可）:
1. GS1
2. HIBCC
3. ICCBBA
4. ICCBBA（用于血制品）

实施时间表：
- Class III: 2014年9月24日起
- Class II: 2015年9月24日起（ implants: 2015）
- Class I and unclassified: 2018年9月24日起

GUDID (Global Unique Device Identification Database):
- 所有医疗器械必须提交至GUDID
- 包含DI、产品名称、分类、标签等
- 公众可查询

UDI标注要求：
1. 标签和包装上标注UDI
2. 直接标识（Direct Marking）:
   - 可重复使用器械需要在器械本身标注UDI
3. 例外情况:
   - 某些Class I器械可豁免

UDI数据库提交：
- DI信息
- 产品名称
- 分类
- 生产企业
- 包装信息`,
    url: "https://www.fda.gov/medical-devices/unique-device-identification-system-udi-system"
  },
  {
    id: "INTL-025",
    title: "EU Medical Device Coordination Group (MDCG) Guidance Documents",
    number: "MDCG Guidance Series",
    category: "国际法规",
    region: "欧盟",
    subRegion: "EU",
    authority: "Medical Device Coordination Group (MDCG)",
    publishDate: "2019-01-01",
    effectiveDate: "持续更新",
    status: "现行有效",
    keywords: ["EU", "MDCG", "指导文件", "MDR", "指南"],
    summary: "欧盟MDCG发布的MDR/IVDR实施指导文件，为MDR和IVDR的具体实施提供操作指南。",
    content: `MDCG Guidance Documents - MDCG指导文件

重要文件清单：

MDCG 2019-6: Questions and Answers about obligations and duties of distributors
MDCG 2019-8: Guidance document on implant card
MDCG 2019-11: Guidance on qualification and classification of software
MDCG 2019-15: Guidance on clinical evaluation
MDCG 2019-16: Guidance on Cybersecurity for medical devices
MDCG 2020-1: Guidance on clinical evaluation - equivalence
MDCG 2020-3: Guidance on significant changes under MDR Article 120
MDCG 2020-5: Guidance on EUDAMED
MDCG 2020-6: Guidance on sufficient clinical evidence
MDCG 2020-7: Guidance on PMCF plan template
MDCG 2020-8: Guidance on PMCF evaluation report template
MDCG 2021-6: Guidance on integration of MDR requirements into QMS
MDCG 2021-24: Guidance on classification of products
MDCG 2021-25: Guidance on borderline products
MDCG 2022-2: Guidance on general principles of clinical evidence for IVDs
MDCG 2022-14: Guidance on principles of clinical evaluation for medical devices
MDCG 2023-3: Guidance on evidence for CEmarking
MDCG 2024-3: Guidance on AI in medical devices

关键指导领域：
1. 分类和界定
2. 临床评价
3. 上市后监管
4. UDI实施
5. EUDAMED使用
6. 软件和网络安全
7. 过渡期管理
8. 定制器械
9. 系统和器械组合
10. AI医疗器械`,
    url: "https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en"
  },
  {
    id: "INTL-026",
    title: "GHTF - Global Harmonization Task Force Documents",
    number: "GHTF Series",
    category: "国际指南",
    region: "国际",
    subRegion: "GHTF/IMDRF",
    authority: "Global Harmonization Task Force (GHTF)",
    publishDate: "1993-01-01",
    effectiveDate: "已由IMDRF接替",
    status: "已被IMDRF取代（历史参考）",
    keywords: ["GHTF", "全球协调", "IMDRF", "历史"],
    summary: "GHTF是全球医疗器械协调的先驱组织，其文件至今仍是国际医疗器械监管的重要参考，后由IMDRF接替。",
    content: `GHTF (Global Harmonization Task Force) 文件

GHTF于1993年成立，2012年由IMDRF接替。GHTF发布的指导文件至今仍是国际医疗器械监管的重要参考。

五个研究组：
SG1: Pre-market evaluation (上市前评价)
- GHTF/SG1/N68: Essential Principles of Safety and Performance
- GHTF/SG1/N77: Principles of Medical Devices Classification

SG2: Post-market surveillance (上市后监管)
- GHTF/SG2/N57: Medical Device Post Market Surveillance
- GHTF/SG2/N79: Adverse Event Reporting

SG3: Quality assurance (质量保证)
- GHTF/SG3/N15-17: Quality Management Systems
- GHTF/SG3/N99: Process Validation

SG4: Quality system auditing (质量体系审核)
- GHTF/SG4/N30: Regulatory Auditing of Quality Systems

SG5: Clinical safety/performance (临床安全/性能)
- GHTF/SG5/N1: Clinical Evaluation
- GHTF/SG5/N2: Clinical Trials
- GHTF/SG5/N6: Risk Management

GHTF的遗产：
- IMDRF继承了GHTF的工作
- 许多国家法规参考GHTF文件
- UDI系统最初由GHTF提出`,
    url: "https://www.imdrf.org"
  },
  {
    id: "INTL-027",
    title: "IMDRF Software as a Medical Device (SaMD) Guidance",
    number: "IMDRF/SaMD WG/N67",
    category: "国际指南",
    region: "国际",
    subRegion: "IMDRF",
    authority: "International Medical Device Regulators Forum (IMDRF)",
    publishDate: "2013-09-18",
    effectiveDate: "2013-09-18",
    status: "现行有效",
    keywords: ["IMDRF", "SaMD", "软件", "医疗器械软件", "软件分类"],
    summary: "IMDRF关于医疗器械软件（SaMD）的指导文件，为全球软件医疗器械监管提供框架。",
    content: `IMDRF Software as a Medical Device (SaMD) Guidance

SaMD定义：
不需要作为医疗器械硬件一部分运行的软件，用于实现一项或多项医疗目的。

SaMD分类框架：
基于两个维度分类：
1. 信息对医疗决策的重要性：
   - 驱动或告知临床管理
   - 告知临床管理
   - 收集临床信息

2. 医疗状况严重程度：
   - 严重状况（危及生命）
   - 严重状况（严重伤害）
   - 非严重状况

SaMD风险类别：
Category IV: 驱动或告知治疗/预防的软件，针对严重/危及生命状况
Category III: 告知治疗/预防的软件，针对严重/危及生命状况；或驱动或告知的临床管理，针对严重状况
Category II: 告知临床管理的软件，针对严重状况；或驱动或告知临床管理，针对非严重状况
Category I: 收集临床信息的软件

SaMD关键指导文件：
1. N10: SaMD: Key Definitions
2. N12: SaMD: Application of QMS
3. N23: SaMD: Risk Categorization
4. N67: SaMD: Risk Categorization Framework
5. N41: SaMD: Application of Quality Management System
6. N55: SaMD: Clinical Evaluation
7. N77: Software as a Medical Device: Possible Framework for Risk Categorization and Corresponding Considerations

与各国软件医疗器械法规的关系：
- FDA: SaMD分类与IMDRF框架一致
- EU: MDR将软件按风险分为Class I-III
- 中国: 软件按安全等级分为A/B/C
- 日本: SaMD按风险分为Class I-IV`,
    url: "https://www.imdrf.org"
  },
  {
    id: "INTL-028",
    title: "IEC 62304 / IMDRF AI in Medical Devices",
    number: "IMDRF/AI ML WG/N66",
    category: "国际指南",
    region: "国际",
    subRegion: "IMDRF",
    authority: "International Medical Device Regulators Forum (IMDRF)",
    publishDate: "2022-09-02",
    effectiveDate: "2022-09-02",
    status: "现行有效",
    keywords: ["IMDRF", "AI", "人工智能", "机器学习", "ML", "持续学习"],
    summary: "IMDRF关于人工智能/机器学习医疗器械的指导文件，为AI医疗器械的监管提供框架。",
    content: `IMDRF Machine Learning-enabled Medical Devices (ML-enabled MD) Guidance

核心概念：
1. Lock AI: 锁定型AI（参数固定，不随使用变化）
2. Adaptive/Continuous Learning AI: 持续学习型AI（参数随使用数据变化）

关键指导文件：
1. IMDRF/AI ML WG/N66: "Machine Learning-enabled Medical Devices: Key Terms and Definitions"
   - AI/ML医疗器械术语定义

2. FDA Guidance: "PCCP - Predetermined Change Control Plan"
   - 预设变更控制计划
   - 允许AI医疗器械在预设范围内自主更新

PCCP框架：
1. Algorithm Change Protocol (ACP):
   - 算法变更协议
   - 定义允许的变更类型和范围
   - 变更验证方法

2. Modification Protocol:
   - 修改协议
   - 定义变更触发条件
   - 变更实施流程

3. Impact Assessment:
   - 影响评估
   - 评估变更对安全和有效性的影响

AI/ML医疗器械监管要点：
1. 数据集管理（训练、调优、测试）
2. 算法透明度和可解释性
3. 性能验证和确认
4. 算法更新管理
5. 上市后监测
6. 网络安全

各国AI医疗器械监管进展：
- FDA: PCCP框架，AI/ML SaMD行动计划
- EU: MDR + MDCG 2024-3 AI指导
- 中国: 人工智能医疗器械注册审查指导原则
- 日本: AI/ML医疗器械审评指南`,
    url: "https://www.imdrf.org"
  },
  {
    id: "INTL-029",
    title: "FDA Cybersecurity Guidance for Medical Devices",
    number: "FDA Final Guidance 2023",
    category: "国际法规",
    region: "美国",
    subRegion: "FDA",
    authority: "U.S. Food and Drug Administration (FDA)",
    publishDate: "2023-09-27",
    effectiveDate: "2023-10-01",
    status: "现行有效",
    keywords: ["FDA", "网络安全", "信息安全", "Coordinated Disclosure", "SBOM"],
    summary: "FDA医疗器械网络安全指南，将网络安全作为医疗器械上市的前提条件。",
    content: `FDA Cybersecurity Guidance for Medical Devices (2023)

法律依据：
FD&C Act Section 524B - Ensuring Cybersecurity of Devices
2023年3月起，所有网络连接器械必须满足网络安全要求才能上市。

网络安全要求：

1. Cybersecurity risk management:
   - 识别器械网络安全风险
   - 评估风险影响
   - 实施风险控制措施

2. Security by Design:
   - 设计阶段考虑网络安全
   - 最小权限原则
   - 纵深防御

3. Threat Modeling:
   - 识别威胁和攻击面
   - 评估威胁严重程度
   - 制定防御策略

4. Software Bill of Materials (SBOM):
   - 所有器械必须提供SBOM
   - 列明所有软件组件和依赖
   - 包含版本和漏洞信息

5. Coordinated Vulnerability Disclosure (CVD):
   - 建立漏洞报告渠道
   - 90天内响应漏洞报告
   - 协调漏洞修复和披露

6. Post-market Cybersecurity:
   - 监测网络安全威胁
   - 及时发布安全补丁
   - 报告网络安全事件

7. Cybersecurity Documentation:
   - 网络安全风险分析
   - 安全架构文档
   - 测试报告
   - SBOM
   - CVD流程文档
   - 上市后网络安全计划

提交文件清单：
1. Threat model
2. System security risk assessment
3. Architecture security views
4. SBOM
5. Testing documentation
6. Risk management
7. CVD plan
8. Post-market cybersecurity plan`,
    url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/cybersecurity-medical-devices-quality-system-considerations-and-content-premarket-submissions"
  },
  {
    id: "INTL-030",
    title: "IMDRF Good Regulatory Review Practices (GRRP)",
    number: "IMDRF/GRRP WG/N52",
    category: "国际指南",
    region: "国际",
    subRegion: "IMDRF",
    authority: "International Medical Device Regulators Forum (IMDRF)",
    publishDate: "2017-06-15",
    effectiveDate: "2017-06-15",
    status: "现行有效",
    keywords: ["IMDRF", "GRRP", "监管审查", "审评实践", "协调"],
    summary: "IMDRF良好监管审查实践，为各国医疗器械监管审评提供统一的最佳实践指导。",
    content: `IMDRF Good Regulatory Review Practices (GRRP)

核心原则：
1. 透明性：审评过程和标准公开透明
2. 一致性：相同类型产品审评标准一致
3. 时效性：在合理时间内完成审评
4. 科学性：基于科学证据进行审评
5. 比例性：审评深度与风险等级成比例

GRRP关键文件：
1. IMDRF/GRRP WG/N52: Essential Principles of Safety and Performance
2. IMDRF/GRRP WG/N55: Principles of Labelling for Medical Devices
3. IMDRF/GRRP WG/N59: Principles of Reliance
4. IMDRF/GRRP WG/N61: Reliance Pathway

Reliance机制：
- 一个国家监管机构可以依赖另一个国家监管机构的审评决策
- 减少重复审评
- 特别适用于发展中国家
- 基于信任和透明

审评类型：
1. Full Review: 全面审评
2. Abbreviated Review: 简化审评（基于依赖）
3. Verification Review: 验证审评（仅检查格式和完整性）

标准化的技术文件结构（STED）:
- Summary Technical Documentation
- 统一的技术文件格式
- 便于多国提交`,
    url: "https://www.imdrf.org"
  },
  {
    id: "INTL-031",
    title: "ASEAN Medical Device Directive (AMDD)",
    number: "ASEAN Medical Device Directive",
    category: "国际法规",
    region: "东盟",
    subRegion: "ASEAN",
    authority: "Association of Southeast Asian Nations (ASEAN)",
    publishDate: "2015-01-01",
    effectiveDate: "2015-01-01",
    status: "逐步实施中",
    keywords: ["东盟", "AMDD", "东南亚", "区域协调"],
    summary: "东盟医疗器械指令，协调东南亚国家医疗器械监管标准。",
    content: `ASEAN Medical Device Directive (AMDD)

参与国家：
文莱、柬埔寨、印度尼西亚、老挝、马来西亚、缅甸、菲律宾、新加坡、泰国、越南

核心目标：
1. 协调东盟成员国医疗器械监管要求
2. 促进区域医疗器械贸易
3. 确保医疗器械安全有效

分类：
- Class A (低风险)
- Class B (中低风险)
- Class C (中高风险)
- Class D (高风险)

注册要求：
1. 技术文件
2. 质量管理体系（ISO 13485）
3. 风险管理
4. 临床评价

ASEAN Cosmetic Directive的医疗器械版本

成员国实施进度：
- 新加坡: 已全面实施
- 马来西亚: 已实施
- 泰国: 已实施
- 印尼: 部分实施
- 菲律宾: 部分实施
- 其他国家: 逐步推进

特色：
- 接受CE/FDA认证简化注册
- 区域互认机制`,
    url: "https://asean.org"
  },
  {
    id: "INTL-032",
    title: "IMDRF Essential Principles of Safety and Performance (EP) Checklist",
    number: "IMDRF/GRRP WG/N52EP",
    category: "国际指南",
    region: "国际",
    subRegion: "IMDRF",
    authority: "International Medical Device Regulators Forum (IMDRF)",
    publishDate: "2018-03-09",
    effectiveDate: "2018-03-09",
    status: "现行有效",
    keywords: ["IMDRF", "EP", "基本原则清单", "安全有效"],
    summary: "IMDRF安全有效基本原则清单，是医疗器械技术文件的标准模板。",
    content: `IMDRF Essential Principles Checklist

清单使用说明：
对于每一条EP，注明：
1. 是否适用
2. 用于证明符合的方法
3. 符合性证据的位置

符合性证明方法：
1. Compliance through adherence to standards
2. Compliance through conformity with commonly accepted industry test methods
3. Compliance through conformity with in-house test methods
4. Compliance through clinical evaluation

EP清单部分条目示例：
A1 General: 设计和生产应消除或降低风险
- 适用性：适用于所有器械
- 证明方法：风险管理报告（ISO 14971）
- 证据位置：技术文件第X章

A7 Clinical evaluation: 临床评价
- 适用性：适用于所有器械
- 证明方法：临床评价报告
- 证据位置：技术文件第Y章

B12 Electromagnetic compatibility: 电磁兼容
- 适用性：适用于有源器械
- 证明方法：IEC 60601-1-2测试
- 证据位置：技术文件第Z章

B11 Software: 软件
- 适用性：适用于含软件的器械
- 证明方法：IEC 62304
- 证据位置：技术文件第W章

该清单是所有国际技术文件的核心组件：
- FDA: Design History File引用
- EU MDR: Annex I GSPR
- 中国: 安全有效基本要求清单
- IMDRF: EP Checklist`,
    url: "https://www.imdrf.org"
  }
];
