---
type: "Ludus Gameplay System"
title: "追跡と逃走"
description: "移動能力、障害物、痕跡、距離回復から追跡循環を作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "asymmetric-multiplayer"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:asymmetric-multiplayer:pursuit-evasion"
genre_id: "genre:asymmetric-multiplayer"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

移動能力、障害物、痕跡、距離回復から追跡循環を作る。

# 設計思想

一度の接触で結果を固定しない。

# 主要機能

- 追跡状態
- 逃走経路
- 位置推定

# UXへの寄与

- [緊張](../../ux/a1ffa9bbe49f610d.md)
- [逆転感](../../ux/d46d3b5804ac1d54.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)
- [空間と移動](../../domains/space-and-navigation.md)
- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [シーン描画](../../pictor/scene-rendering.md)

# 実装上の前提

- [陣営別の不完全情報](./hidden-information.md) の後に実装する。
