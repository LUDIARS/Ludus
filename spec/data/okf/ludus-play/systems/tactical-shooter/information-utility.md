---
type: "Ludus Gameplay System"
title: "索敵とユーティリティ"
description: "視界、音、煙、投擲物を通じて不完全情報を更新する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "tactical-shooter"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:tactical-shooter:information-utility"
genre_id: "genre:tactical-shooter"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

視界、音、煙、投擲物を通じて不完全情報を更新する。

# 設計思想

情報の発生源と有効期限を明示する。

# 主要機能

- 可視性遮断
- 足音伝播
- 索敵効果

# UXへの寄与

- [読み合い](../../ux/4333f56898c1e87e.md)
- [連携](../../ux/e73b7be6f0d5c286.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [精密射撃と姿勢制御](./precision-gunplay.md) の後に実装する。
