---
type: "Ludus Gameplay System"
title: "ライブバランスとテレメトリ"
description: "利用率、勝率、編成別成績から継続的に調整する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "hero-shooter"
  - "pictor-visual"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:hero-shooter:live-balance"
genre_id: "genre:hero-shooter"
implementation_status: "pictor-visual"
implementation_owner: "Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

利用率、勝率、編成別成績から継続的に調整する。

# 設計思想

全体平均だけでなく熟練度帯と編成を分けて評価する。

# 主要機能

- ヒーロー別指標
- 設定配信
- 段階的ロールアウト

# UXへの寄与

- [信頼](../../ux/2411804b4d413030.md)
- [多様性](../../ux/f655c736189ce4ed.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [メタゲームと運用](../../domains/meta-and-live-operations.md)

# 汎用実装の判定

- **状態**: pictor-visual
- **所有**: Pictor
- **判断**: ゲーム固有の意味付けを持たない視覚表現としてPictorに集約する候補。

# Pictor候補

- [テキスト・ベクター・モーショングラフィックス](../../pictor/text-vector-motion.md)

# 実装上の前提

- [必殺技ゲージと交戦計画](./ultimate-economy.md) の後に実装する。
