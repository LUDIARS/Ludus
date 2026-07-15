---
type: "Ludus Gameplay System"
title: "競技マッチと評価"
description: "実力推定、チーム編成、再接続、試合記録を管理する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "tactical-shooter"
  - "pictor-visual"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:tactical-shooter:competitive-match"
genre_id: "genre:tactical-shooter"
implementation_status: "pictor-visual"
implementation_owner: "Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

実力推定、チーム編成、再接続、試合記録を管理する。

# 設計思想

評価値と報酬を同一視しない。

# 主要機能

- レーティング
- 役割を考慮した編成
- リプレイ

# UXへの寄与

- [成長実感](../../ux/24fad9433dbd0365.md)
- [公平感](../../ux/761295392476961e.md)

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

- [権威命中判定と補償](./authoritative-hit.md) の後に実装する。
