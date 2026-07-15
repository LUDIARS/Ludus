---
type: "Ludus Gameplay System"
title: "人間関係と地域イベント"
description: "会話、贈答、共同作業を通じて人物との関係や地域の出来事を変化させる。"
tags:
  - "ludus"
  - "gameplay-system"
  - "life-sim"
  - "pictor-visual"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:life-sim:relationships-events"
genre_id: "genre:life-sim"
implementation_status: "pictor-visual"
implementation_owner: "Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

会話、贈答、共同作業を通じて人物との関係や地域の出来事を変化させる。

# 設計思想

数値を上げることより、相手との文脈を増やす。

# 主要機能

- 好感度と記憶
- 会話条件
- 季節イベント

# UXへの寄与

- [居場所感](../../ux/ffbe59aeabe088bc.md)
- [人物理解](../../ux/32aa5b6a9c6dca8a.md)

# ドメイン要素

- [物語と知識](../../domains/narrative-and-knowledge.md)

# 汎用実装の判定

- **状態**: pictor-visual
- **所有**: Pictor
- **判断**: ゲーム固有の意味付けを持たない視覚表現としてPictorに集約する候補。

# Pictor候補

- [テキスト・ベクター・モーショングラフィックス](../../pictor/text-vector-motion.md)

# 実装上の前提

- [栽培・生産・クラフト](./farming-crafting.md) の後に実装する。
