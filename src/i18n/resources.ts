export const resources = {
  en: {
    translation: {
      nav: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        thinking: "Thinking",
        contact: "Contact",
        languageLabel: "Switch language",
      },
      hero: {
        kicker: "/ 2026",
        name: "Chase Chai",
        subtitle:
          "An idealist determined to explore the world and leave meaningful traces.",
        typedLines: [
          "I build calm systems for complex futures.",
          "Engineering with reason, creating with empathy.",
          "A long-term explorer between AI and society.",
        ],
      },
      about: {
        kicker: "About Me",
        title: "Thinking in systems, living with curiosity.",
        description:
          "I care about building technology that improves human agency. My approach blends engineering discipline with artistic sensitivity: define clearly, iterate patiently, and keep asking what kind of future we are building.",
        timeline: [
          {
            year: "2025",
            title: "BUPT Freshman",
            description:
              "Started Electronic Information at BUPT and built a strong systems-thinking foundation.",
          },
          {
            year: "2026",
            title: "ETHpanda Web3 Internship",
            description:
              "Winter cohort of ETHpanda. Core member of the BUPT Blockchain Association, running daily operations for a 100+ member community.",
          },
          {
            year: "2026",
            title: "AdventureX Hackathon · 2nd Prize",
            description:
              "Won a track second prize with Decree Farm, an intelligent-ring × AI agent behavior incentive product.",
          },
        ],
      },
      skills: {
        kicker: "Skills",
        title: "A practical toolkit for building meaningful products.",
        groups: [
          {
            title: "Core Stack (Independent)",
            items: [
              { name: "Next.js / React / TypeScript" },
              { name: "Tailwind CSS / HTML5 Canvas" },
              { name: "Python / Flask" },
            ],
          },
          {
            title: "AI-Augmented Projects",
            items: [
              { name: "YOLOv5 / PyTorch / OpenCV" },
              { name: "Three.js / Solidity / Foundry" },
              { name: "Framer Motion / math.js" },
            ],
          },
          {
            title: "AI Toolchain",
            items: [
              { name: "ChatGPT / Claude" },
              { name: "Cursor / GitHub Copilot" },
              { name: "Vibe Coding Workflow" },
            ],
          },
        ],
      },
      projects: {
        kicker: "Projects",
        items: [
          {
            name: "Decree Farm",
            desc: "An intelligent-ring × AI agent behavior incentive product. On-device IMU focus recognition (sliding-window features + HMM) maps real-world concentration into virtual farm rewards, while an Observe → Decide → Act → Feedback loop plans farming, fishing and trading.",
            stack: "AI Agent / Edge AI / Smart Hardware",
            highlight:
              "100+ member community, full loop from ring sensing to in-game feedback.",
            award: "AdventureX 2026 · Track 2nd Prize",
          },
          {
            name: "GhostCall",
            meta: "Core Member · 2026.03",
            desc: "An AI agent collaboration network: task marketplace, collaboration protocol, and trust infrastructure. zkVM ties agent identity to code hashes and proves execution, making \"code as identity\" verifiable.",
            stack: "React / Agent / zkVM",
            highlight:
              "A capability–reputation–price graph framing research on stablecoins and on-chain finance infrastructure.",
            award: "Zhongguancun Hackathon 2026 · Award Winner",
            github: "https://github.com/ChaseChai/ghostcall",
          },
          {
            name: "AuditOps (Kite Payment)",
            meta: "2026.01",
            desc: "A multi-agent contract audit and A2A payment system on Kite AI. Runs a full request → matching → structured collaboration → atomic settlement loop, with budget-isolated, EIP-712 authorized session-key payments.",
            stack: "Python / Solidity / Agent",
            highlight:
              "20–50% lower audit cost through a vulnerability-bounty rebate model; end-to-end demo on Kite AI Testnet.",
            github: "https://github.com/ChaseChai/kite_payment",
          },
          {
            name: "Nexday",
            desc: "An AI-driven personal growth companion that breaks abstract goals into daily repeatable actions.",
            stack: "Next.js / AI / Product",
            highlight: "Plan, reflect, execute — all in one flow.",
            github: "https://github.com/ChaseChai/nexday",
          },
          {
            name: "Robotic Arm Vision",
            desc: "A YOLOv5s-powered visual sorting system. PC + Raspberry Pi distributed architecture, real-time object detection and autonomous grasping.",
            stack: "Python / PyTorch / YOLOv5",
            highlight: ">90% grasp success, <30ms inference.",
            github: "https://github.com/ChaseChai/yolov5-robotic-arm",
          },
          {
            name: "MathBlaster",
            desc: "An East-Asian-ink styled math shooter. Parse math expressions in real-time, fire them as trajectories at 60fps.",
            stack: "Canvas / Game / Math",
            highlight: "From algebra to calculus — play and learn.",
            github: "https://github.com/ChaseChai/MathBlaster",
          },
          {
            name: "moduAI",
            desc: "Describe hardware needs in natural language, get matched components and 3D previews instantly.",
            stack: "Three.js / Hardware / AI",
            highlight: "Natural language → hardware BOM, no magic.",
            github: "https://github.com/ChaseChai/moduAI",
          },
        ],
      },
      thinking: {
        kicker: "Thinking / Essays",
        title: "Notes from an engineer learning how to think long-term.",
      },
      contact: {
        kicker: "Contact",
        title: "Let us build thoughtful technology together.",
        email: "Email",
        github: "GitHub",
        social: "Social",
        socialText: "Open to high-quality conversations",
      },
    },
  },
  zh: {
    translation: {
      nav: {
        about: "关于",
        skills: "技能",
        projects: "项目",
        thinking: "思考",
        contact: "联系",
        languageLabel: "切换语言",
      },
      hero: {
        kicker: "/ 2026",
        name: "Chase Chai",
        subtitle: "一个想探索世界，并在其中留下自己痕迹的理想主义者。",
        typedLines: [
          "我在复杂世界里，设计冷静而可靠的系统。",
          "用理性做工程，用共情做产品。",
          "在 AI 与社会的交界，持续进行长期探索。",
        ],
      },
      about: {
        kicker: "关于我",
        title: "以系统思维理解世界，以好奇心持续前行。",
        description:
          "我关注技术如何真正提升人的能动性。我希望在工程纪律与艺术感知之间找到平衡：定义问题要清晰，迭代过程要耐心，最终始终追问我们正在塑造怎样的未来。",
        timeline: [
          {
            year: "2025",
            title: "BUPT 大一",
            description: "进入北京邮电大学电子信息类，系统学习工程基础。",
          },
          {
            year: "2026",
            title: "ETHpanda Web3 实习",
            description:
              "ETHpanda 冬季实习计划学员，北邮区块链协会核心成员，参与 100+ 人社群的日常运营。",
          },
          {
            year: "2026",
            title: "AdventureX 黑客松 · 赛道二等奖",
            description:
              "凭借「戒律农场 Decree Farm」智能戒指 × AI Agent 行为激励产品获得赛道二等奖。",
          },
        ],
      },
      skills: {
        kicker: "技能",
        title: "一套面向真实问题的工程与产品工具箱。",
        groups: [
          {
            title: "核心栈（独立开发）",
            items: [
              { name: "Next.js / React / TypeScript" },
              { name: "Tailwind CSS / HTML5 Canvas" },
              { name: "Python / Flask" },
            ],
          },
          {
            title: "AI 辅助完成项目",
            items: [
              { name: "YOLOv5 / PyTorch / OpenCV" },
              { name: "Three.js / Solidity / Foundry" },
              { name: "Framer Motion / math.js" },
            ],
          },
          {
            title: "AI 工具链",
            items: [
              { name: "ChatGPT / Claude" },
              { name: "Cursor / GitHub Copilot" },
              { name: "Vibe Coding 工作流" },
            ],
          },
        ],
      },
      projects: {
        kicker: "项目",
        items: [
          {
            name: "戒律农场 Decree Farm",
            desc: "智能戒指 × AI Agent 行为激励产品。端侧 IMU 专注识别（滑窗特征 + HMM 分类）把现实专注状态映射为虚拟农场收益，Agent 按「感知 → 决策 → 行动 → 反馈」闭环由 LLM / 规则双策略自主经营。",
            stack: "AI Agent / 端侧 AI / 智能硬件",
            highlight: "100+ 人社群，从戒指感知到游戏反馈的完整行为闭环。",
            award: "AdventureX 2026 · 赛道二等奖",
          },
          {
            name: "GhostCall",
            meta: "核心成员 · 2026.03",
            desc: "AI Agent 协作网络：任务市场 + 协作协议 + 信任基建。基于 zkVM 将 Agent 身份与代码哈希绑定并为执行过程生成证明，实现「代码即身份」的可验证执行。",
            stack: "React / Agent / zkVM",
            highlight:
              "沉淀「能力—信誉—价格」图谱，为稳定币与链上金融基础设施研究提供框架。",
            award: "中关村黑客松 2026 · 获奖",
            github: "https://github.com/ChaseChai/ghostcall",
          },
          {
            name: "AuditOps (Kite Payment)",
            meta: "2026.01",
            desc: "基于 Kite AI 的多 Agent 合约审计与 A2A 支付系统。跑通「需求发布 → 智能匹配 → 结构化协作 → 原子结算」闭环，预算隔离 + EIP-712 授权 + Session Key 自主结算。",
            stack: "Python / Solidity / Agent",
            highlight:
              "漏洞悬赏返利模式使审计成本降低 20–50%，Kite AI 测试网端到端 Demo。",
            github: "https://github.com/ChaseChai/kite_payment",
          },
          {
            name: "Nexday",
            desc: "AI 驱动的个人成长伴侣，把抽象目标拆解为每天可执行的行动。",
            stack: "Next.js / AI / 产品",
            highlight: "计划、复盘、执行，一个流程闭环。",
            github: "https://github.com/ChaseChai/nexday",
          },
          {
            name: "机械臂视觉分拣",
            desc: "基于 YOLOv5s 的视觉分拣系统，PC + 树莓派分布式架构，实时检测与自主抓取。",
            stack: "Python / PyTorch / YOLOv5",
            highlight: "抓取成功率 >90%，推理 <30ms。",
            github: "https://github.com/ChaseChai/yolov5-robotic-arm",
          },
          {
            name: "MathBlaster",
            desc: "东方墨韵风格数学射击游戏，实时解析数学表达式并渲染为 60fps 弹道轨迹。",
            stack: "Canvas / 游戏 / 数学",
            highlight: "从代数到微积分，边玩边学。",
            github: "https://github.com/ChaseChai/MathBlaster",
          },
          {
            name: "moduAI",
            desc: "用自然语言描述硬件需求，即时匹配元器件方案并提供 3D 预览。",
            stack: "Three.js / 硬件 / AI",
            highlight: "自然语言 → 硬件 BOM，所见即所得。",
            github: "https://github.com/ChaseChai/moduAI",
          },
        ],
      },
      thinking: {
        kicker: "思考 / 文章",
        title: "一个工程学习者的长期主义笔记。",
      },
      contact: {
        kicker: "联系",
        title: "如果你也在思考长期价值，欢迎交流。",
        email: "邮箱",
        github: "GitHub",
        social: "社交",
        socialText: "期待高质量对话",
      },
    },
  },
} as const;

export type AppLanguage = keyof typeof resources;
