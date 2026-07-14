---
type: "Ludus Gameplay System"
title: "移動とカイティング"
description: "敵群との距離と経路を調整し、攻撃を受けずに生存する操作を成立させる。"
tags:
  - "ludus"
  - "gameplay-system"
  - "survivors-like"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:survivors-like:movement-kiting"
genre_id: "genre:survivors-like"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

敵群との距離と経路を調整し、攻撃を受けずに生存する操作を成立させる。

# 設計思想

攻撃入力より、移動判断が主役になるようにする。

# 主要機能

- 全方向移動
- 敵との距離判定
- 地形・経路

# UXへの寄与

- [生存の手触り](../../ux/e31532b8102f5ea5.md)
- [集中](../../ux/a24f502c764c34cb.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [入力と操作](../../domains/input-and-control.md)
- [空間と移動](../../domains/space-and-navigation.md)
- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [シーン描画](../../pictor/scene-rendering.md)

# 実装上の前提

- このジャンル内で先行関係は定義されていない。
