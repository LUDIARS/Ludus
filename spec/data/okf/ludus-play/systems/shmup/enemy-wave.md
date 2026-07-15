---
type: "Ludus Gameplay System"
title: "敵編隊とウェーブ出現"
description: "敵の出現順・配置・攻撃を時間軸で管理し、ステージごとのリズムを作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "shmup"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:shmup:enemy-wave"
genre_id: "genre:shmup"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

敵の出現順・配置・攻撃を時間軸で管理し、ステージごとのリズムを作る。

# 設計思想

暗記を要求するのでなく、出現から次の行動を読ませる。

# 主要機能

- 編隊配置
- 出現キュー
- ボス遷移

# UXへの寄与

- [高揚感](../../ux/4ce3cf3d58819115.md)
- [予測可能性](../../ux/1bc3880db0ad5a3f.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [空間と移動](../../domains/space-and-navigation.md)
- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [コンテンツとペーシング](../../domains/content-and-pacing.md)
- [音とリズム](../../domains/audio-and-rhythm.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [シーン描画](../../pictor/scene-rendering.md)

# 実装上の前提

- [弾幕パターン](./bullet-pattern.md) の後に実装する。
