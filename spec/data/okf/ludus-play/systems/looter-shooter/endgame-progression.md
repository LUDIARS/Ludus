---
type: "Ludus Gameplay System"
title: "エンドゲーム進行"
description: "装備が揃った後も難度、目標、収集の横方向進行を提供する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "looter-shooter"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:looter-shooter:endgame-progression"
genre_id: "genre:looter-shooter"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

装備が揃った後も難度、目標、収集の横方向進行を提供する。

# 設計思想

更新を強制する陳腐化速度を抑える。

# 主要機能

- 難度階層
- 週次目標
- 装備更新上限

# UXへの寄与

- [継続目標](../../ux/d92aebe834a48ae8.md)
- [熟達](../../ux/79dca58dcb75a487.md)

# ドメイン要素

- [目的と成長](../../domains/objectives-and-progression.md)
- [メタゲームと運用](../../domains/meta-and-live-operations.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [協力セッションと分配](./cooperative-session.md) の後に実装する。
