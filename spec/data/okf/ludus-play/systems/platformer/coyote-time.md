---
type: "Ludus Gameplay System"
title: "コヨーテタイム (Coyote Time)"
description: "地面から離れた直後の短時間、ジャンプ入力を有効にし、タイミングのミスを許容する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "platformer"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:platformer:coyote-time"
genre_id: "genre:platformer"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

地面から離れた直後の短時間、ジャンプ入力を有効にし、タイミングのミスを許容する。

# 設計思想

『プレイヤーの意図を尊重する』システム。人間の反応速度と画面認識には遅延があり、厳密なタイミングを要求すると不公平に感じる。名前の由来はアニメで崖から落ちる前の一瞬の静止。

# 主要機能

- 猶予フレーム (地面離脱後6-10フレーム程度ジャンプ可能)
- 状態追跡 (最後に接地していた時間を記録)
- 視覚的フィードバック (猶予中は通常のジャンプと区別しない)

# UXへの寄与

- [寛容性](../../ux/49066749d5fb0ee8.md)
- [流動性](../../ux/17658f073d36edad.md)
- [学習曲線の緩和](../../ux/7b2f8e922acff2bb.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [入力と操作](../../domains/input-and-control.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [音とリズム](../../domains/audio-and-rhythm.md)
- [演出とフィードバック](../../domains/presentation-and-feedback.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [インパクト・ポストプロセス](../../pictor/impact-and-postprocess.md)

# 実装上の前提

- [ジャンプメカニクス](./jump-mechanics.md) の後に実装する。
