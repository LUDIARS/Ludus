---
type: "Ludus Gameplay System"
title: "障害物とタイミング判定"
description: "障害物の配置と判定猶予を調整し、反応と予測の気持ちよい連鎖を作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "runner"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:runner:obstacle-timing"
genre_id: "genre:runner"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

障害物の配置と判定猶予を調整し、反応と予測の気持ちよい連鎖を作る。

# 設計思想

不意打ちでなく、見て判断できる速さを守る。

# 主要機能

- 障害物種別
- 予兆
- 猶予時間

# UXへの寄与

- [緊張と快感](../../ux/9ad9a2421eea5082.md)
- [上達実感](../../ux/3edd93bc53040a0c.md)

# ドメイン要素

- [空間と移動](../../domains/space-and-navigation.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [音とリズム](../../domains/audio-and-rhythm.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [シーン描画](../../pictor/scene-rendering.md)

# 実装上の前提

- [自動移動とレーン操作](./auto-lane-control.md) の後に実装する。
