---
type: "Ludus Gameplay System"
title: "精密射撃と姿勢制御"
description: "移動、姿勢、反動、拡散を照準精度へ反映する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "tactical-shooter"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:tactical-shooter:precision-gunplay"
genre_id: "genre:tactical-shooter"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

移動、姿勢、反動、拡散を照準精度へ反映する。

# 設計思想

乱数だけでなく制御可能な誤差を残す。

# 主要機能

- 反動パターン
- 移動精度ペナルティ
- 部位命中

# UXへの寄与

- [熟達](../../ux/79dca58dcb75a487.md)
- [手応え](../../ux/b92b10932b0a2ba1.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)
- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [インパクト・ポストプロセス](../../pictor/impact-and-postprocess.md)

# 実装上の前提

- [ラウンド目標と勝敗](./round-objective.md) の後に実装する。
