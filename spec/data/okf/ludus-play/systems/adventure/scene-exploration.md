---
type: "Ludus Gameplay System"
title: "シーン探索と移動"
description: "場所を観察し、次に調べる対象や移動先を選べるようにする。"
tags:
  - "ludus"
  - "gameplay-system"
  - "adventure"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:adventure:scene-exploration"
genre_id: "genre:adventure"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

場所を観察し、次に調べる対象や移動先を選べるようにする。

# 設計思想

移動そのものではなく、発見と意味づけのために空間を使う。

# 主要機能

- 地点・画面の遷移
- 注目対象の提示
- 既訪問地点への再訪

# UXへの寄与

- [探索の手触り](../../ux/12ace9bbc2050b28.md)
- [見通し](../../ux/7fb4b30947b02823.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [インパクト・ポストプロセス](../../pictor/impact-and-postprocess.md)

# 実装上の前提

- このジャンル内で先行関係は定義されていない。
