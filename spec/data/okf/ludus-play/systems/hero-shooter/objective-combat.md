---
type: "Ludus Gameplay System"
title: "チーム目標戦闘"
description: "拠点、護衛、進行目標によって交戦場所と再集合のテンポを作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "hero-shooter"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:hero-shooter:objective-combat"
genre_id: "genre:hero-shooter"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

拠点、護衛、進行目標によって交戦場所と再集合のテンポを作る。

# 設計思想

撃破数だけでなく目標貢献を可視化する。

# 主要機能

- 目標進行
- 復帰地点
- 延長判定

# UXへの寄与

- [焦点](../../ux/b4929391ad6fe5d6.md)
- [逆転期待](../../ux/30187d8150b0e07a.md)

# ドメイン要素

- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [目的と成長](../../domains/objectives-and-progression.md)
- [対人関係とセッション](../../domains/social-and-session.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [構成とシナジー](./composition-synergy.md) の後に実装する。
