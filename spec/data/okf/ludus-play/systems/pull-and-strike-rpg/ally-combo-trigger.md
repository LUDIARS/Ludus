---
type: "Ludus Gameplay System"
title: "味方接触コンボ"
description: "味方ユニットへの接触で固有の補助攻撃や効果を発火させ、軌道と編成を結び付ける。"
tags:
  - "ludus"
  - "gameplay-system"
  - "pull-and-strike-rpg"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:pull-and-strike-rpg:ally-combo-trigger"
genre_id: "genre:pull-and-strike-rpg"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

味方ユニットへの接触で固有の補助攻撃や効果を発火させ、軌道と編成を結び付ける。

# 設計思想

接触を偶発的な演出にせず、意図して設計できる連鎖にする。

# 主要機能

- 接触トリガー
- 固有コンボ効果
- 発火条件の可視化

# UXへの寄与

- [連鎖の快感](../../ux/dc9bc245aa183dc0.md)
- [編成の意味](../../ux/a50b1e5f417407f1.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [対立と解決](../../domains/conflict-and-resolution.md)
- [情報とUI](../../domains/information-and-ui.md)
- [演出とフィードバック](../../domains/presentation-and-feedback.md)
- [アクセシビリティと支援](../../domains/accessibility-and-assistance.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [テキスト・ベクター・モーショングラフィックス](../../pictor/text-vector-motion.md)

# 実装上の前提

- [ターン進行とショット解決](./turn-resolution.md) の後に実装する。
