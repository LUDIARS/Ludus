---
type: "Ludus Gameplay System"
title: "ギルドと社会関係"
description: "継続的な所属、権限、通信、共同目標を提供する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "mmorpg"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:mmorpg:social-guild"
genre_id: "genre:mmorpg"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

継続的な所属、権限、通信、共同目標を提供する。

# 設計思想

権限変更と監査履歴を明確にする。

# 主要機能

- ギルド権限
- チャット
- 共同資産

# UXへの寄与

- [所属感](../../ux/23a18028ec1f824d.md)
- [信頼](../../ux/2411804b4d413030.md)

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

- [パーティ役割と大規模協力](./group-roles.md) の後に実装する。
