---
type: "Ludus Gameplay System"
title: "戦闘・戦利品循環"
description: "敵撃破、報酬提示、装備更新、再出撃を短い循環にする。"
tags:
  - "ludus"
  - "gameplay-system"
  - "looter-shooter"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:looter-shooter:combat-loot-loop"
genre_id: "genre:looter-shooter"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

敵撃破、報酬提示、装備更新、再出撃を短い循環にする。

# 設計思想

戦利品確認で戦闘テンポを過度に止めない。

# 主要機能

- ドロップ表
- 報酬回収
- 再出撃

# UXへの寄与

- [期待感](../../ux/91ca175d56b093ef.md)
- [成長実感](../../ux/24fad9433dbd0365.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [対立と解決](../../domains/conflict-and-resolution.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- このジャンル内で先行関係は定義されていない。
