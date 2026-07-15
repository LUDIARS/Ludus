---
type: "Ludus Gameplay System"
title: "協力セッションと分配"
description: "途中参加、復帰、報酬分配を含む協力プレイを成立させる。"
tags:
  - "ludus"
  - "gameplay-system"
  - "looter-shooter"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:looter-shooter:cooperative-session"
genre_id: "genre:looter-shooter"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

途中参加、復帰、報酬分配を含む協力プレイを成立させる。

# 設計思想

参加タイミングで報酬格差を不当に作らない。

# 主要機能

- マッチメイク
- 蘇生
- 個別戦利品

# UXへの寄与

- [協力感](../../ux/0b38736654c4c3bc.md)
- [安心感](../../ux/1be380841e916268.md)

# ドメイン要素

- [対人関係とセッション](../../domains/social-and-session.md)
- [音とリズム](../../domains/audio-and-rhythm.md)
- [ネットワークと同期](../../domains/network-and-synchronization.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [ミッションインスタンス](./mission-instance.md) の後に実装する。
