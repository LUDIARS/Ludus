---
type: "Ludus Gameplay System"
title: "観戦とリプレイ"
description: "脱落後の観戦と試合後の振り返りを提供し、学習と共有を支える。"
tags:
  - "ludus"
  - "gameplay-system"
  - "battle-royale"
  - "pictor-visual"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:battle-royale:spectate-replay"
genre_id: "genre:battle-royale"
implementation_status: "pictor-visual"
implementation_owner: "Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

脱落後の観戦と試合後の振り返りを提供し、学習と共有を支える。

# 設計思想

敗北を切断点にせず、次の理解につなげる。

# 主要機能

- チーム観戦
- 死亡理由の確認
- ハイライト記録

# UXへの寄与

- [学習](../../ux/a9eb6ef8ef7d2f55.md)
- [参加継続](../../ux/c9c19c2e33fe2358.md)

# ドメイン要素

- [対人関係とセッション](../../domains/social-and-session.md)
- [ネットワークと同期](../../domains/network-and-synchronization.md)

# 汎用実装の判定

- **状態**: pictor-visual
- **所有**: Pictor
- **判断**: ゲーム固有の意味付けを持たない視覚表現としてPictorに集約する候補。

# Pictor候補

- [テキスト・ベクター・モーショングラフィックス](../../pictor/text-vector-motion.md)

# 実装上の前提

- [権威同期と不正対策](./authoritative-sync.md) の後に実装する。
