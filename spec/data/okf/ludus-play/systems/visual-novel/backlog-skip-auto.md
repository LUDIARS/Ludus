---
type: "Ludus Gameplay System"
title: "バックログ・既読スキップ・オート"
description: "既読確認、再読、読む速度の調整を可能にし、読書体験を各人に合わせる。"
tags:
  - "ludus"
  - "gameplay-system"
  - "visual-novel"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:visual-novel:backlog-skip-auto"
genre_id: "genre:visual-novel"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

既読確認、再読、読む速度の調整を可能にし、読書体験を各人に合わせる。

# 設計思想

便利機能を攻略の妨げではなく、再読の入口にする。

# 主要機能

- 会話バックログ
- 既読判定スキップ
- オート送りと速度設定

# UXへの寄与

- [読みやすさ](../../ux/b1e84747ce2e1fb9.md)
- [再探索の快適さ](../../ux/53ecf2ae9d930f87.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)
- [物語と知識](../../domains/narrative-and-knowledge.md)
- [アクセシビリティと支援](../../domains/accessibility-and-assistance.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [テキスト・ベクター・モーショングラフィックス](../../pictor/text-vector-motion.md)

# 実装上の前提

- [フラグと関係値](./flags-relations.md) の後に実装する。
