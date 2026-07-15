---
type: "Ludus Gameplay System"
title: "飢餓/料理システム"
description: "食料の調達と調理を通じて、短期的な生存と長期的な計画を統合する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "survival"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:survival:cooking"
genre_id: "genre:survival"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

食料の調達と調理を通じて、短期的な生存と長期的な計画を統合する。

# 設計思想

『最も基本的な生存欲求』の表現。腐敗システムは溜め込みを防ぎ継続的な活動を促す。調理による効果向上 (満腹度+20→+50) で手間をかける価値を示す。実装優先順位上は生存指標に内包される位置づけ。

# 主要機能

- 食材採取 (狩猟/採集/農業)
- 調理設備 (焚き火/調理台/オーブン)
- レシピ (生食より調理で効果向上)
- 腐敗システム (時間経過で食材劣化)
- 保存方法 (燻製/塩漬け/冷蔵で長期保存)
- 栄養バランス (炭水化物/タンパク質/ビタミン)

# UXへの寄与

- [食料確保の緊張](../../ux/cd72b90aa9532103.md)
- [調理の価値](../../ux/399cc69efb38c1fc.md)
- [農業の動機](../../ux/27c24c976c3b1734.md)

# ドメイン要素

- [空間と移動](../../domains/space-and-navigation.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [メタゲームと運用](../../domains/meta-and-live-operations.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- このジャンル内で先行関係は定義されていない。
