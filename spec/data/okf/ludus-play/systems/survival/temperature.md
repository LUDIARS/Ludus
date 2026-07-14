---
type: "Ludus Gameplay System"
title: "体温/気候適応システム"
description: "環境の温度変化に対応を要求し、装備と拠点の価値を高める。"
tags:
  - "ludus"
  - "gameplay-system"
  - "survival"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:survival:temperature"
genre_id: "genre:survival"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

環境の温度変化に対応を要求し、装備と拠点の価値を高める。

# 設計思想

『環境への適応要求』。初期は温暖な地域のみ探索可能で、装備が整うと極地へ進める段階的な世界開放を実現。リアルタイムの体温変化で焚き火の近くに留まる動機を作る。

# 主要機能

- 体温ゲージ (寒暖によるダメージ)
- 環境温度 (バイオーム/高度/天候で変化)
- 防寒/防暑装備 (服や防具)
- 熱源 (焚き火/暖炉での暖房)
- 日陰/避難所 (暑さからの逃避)
- 低体温症/熱射病 (極端な温度での状態異常)

# UXへの寄与

- [装備の選択](../../ux/1293170dd3f05fd1.md)
- [探索の制限](../../ux/c1a798f5f83dcb6f.md)
- [拠点の快適さ](../../ux/7b96a557eefbfa17.md)

# ドメイン要素

- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [情報とUI](../../domains/information-and-ui.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [UI描画](../../pictor/ui-rendering.md)

# 実装上の前提

- [敵/脅威システム](./enemy.md) の後に実装する。
