---
type: "Ludus Gameplay System"
title: "役割別マッチングと評価"
description: "陣営別の熟練度、待ち時間、勝率を分けて編成と調整を行う。"
tags:
  - "ludus"
  - "gameplay-system"
  - "asymmetric-multiplayer"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:asymmetric-multiplayer:role-balance"
genre_id: "genre:asymmetric-multiplayer"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

陣営別の熟練度、待ち時間、勝率を分けて編成と調整を行う。

# 設計思想

全体勝率だけで非対称性を評価しない。

# 主要機能

- 役割別評価
- 希望役割
- 陣営別テレメトリ

# UXへの寄与

- [公平感](../../ux/761295392476961e.md)
- [信頼](../../ux/2411804b4d413030.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)
- [対人関係とセッション](../../domains/social-and-session.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [無力化・救助・離脱](./elimination-rescue.md) の後に実装する。
