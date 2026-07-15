---
type: "Ludus Gameplay System"
title: "衝突・反射・貫通の解決"
description: "壁、敵、味方との接触を一貫して解決し、1ショットから複数の結果を生む。"
tags:
  - "ludus"
  - "gameplay-system"
  - "pull-and-strike-rpg"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:pull-and-strike-rpg:collision-and-reflection"
genre_id: "genre:pull-and-strike-rpg"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

壁、敵、味方との接触を一貫して解決し、1ショットから複数の結果を生む。

# 設計思想

物理の正確さより、軌道の予測可能性と接触の気持ちよさを優先する。

# 主要機能

- 壁反射
- 敵との接触ダメージ
- 反射・貫通などの移動特性

# UXへの寄与

- [軌道攻略](../../ux/3593b47de923195b.md)
- [爽快感](../../ux/aa5e74ea6c56212d.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [入力と操作](../../domains/input-and-control.md)
- [対立と解決](../../domains/conflict-and-resolution.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [シーン描画](../../pictor/scene-rendering.md)

# 実装上の前提

- [照準入力とショット解放](./aim-and-release.md) の後に実装する。
