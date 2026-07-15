---
type: "Ludus Gameplay System"
title: "エッジハング/レッジグラブ (Ledge Grab)"
description: "プラットフォームの縁に掴まり、落下を防ぐ最後の救済手段を提供する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "platformer"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:platformer:ledge-grab"
genre_id: "genre:platformer"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

プラットフォームの縁に掴まり、落下を防ぐ最後の救済手段を提供する。

# 設計思想

『セーフティネット』として機能する。完全自動だと緊張感が薄れ、手動では煩雑。軌道が明らかに届く場合は自動掴まり、ギリギリの場合はプレイヤーの意志に委ねるなど、状況による調整が理想。

# 主要機能

- 自動掴まり (足場の端に接触すると自動でつかまる)
- ぶら下がり状態 (掴まり中は落下せず静止)
- 登る動作 (上入力またはジャンプで足場に乗る)
- 手を離す (下入力で意図的に落下)
- 掴まり範囲 (どの程度の位置までつかまるか)

# UXへの寄与

- [救済措置](../../ux/b4c1c9ac30ddaeaf.md)
- [緊張と安堵](../../ux/5788da56af962598.md)
- [パズル的移動](../../ux/e8eefde5422f5b74.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [入力と操作](../../domains/input-and-control.md)
- [空間と移動](../../domains/space-and-navigation.md)
- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [壁ジャンプ/壁張り付き](./wall-jump.md) の後に実装する。
