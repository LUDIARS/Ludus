---
type: "Ludus Gameplay System"
title: "パーティ役割と大規模協力"
description: "役割構成、募集、戦闘責任、戦利品分配を管理する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "mmorpg"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:mmorpg:group-roles"
genre_id: "genre:mmorpg"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

役割構成、募集、戦闘責任、戦利品分配を管理する。

# 設計思想

失敗原因を役割間で診断可能にする。

# 主要機能

- パーティ募集
- 役割マッチング
- 集団戦

# UXへの寄与

- [協力感](../../ux/0b38736654c4c3bc.md)
- [達成感](../../ux/0bba7c376aacad35.md)

# ドメイン要素

- [対立と解決](../../domains/conflict-and-resolution.md)
- [対人関係とセッション](../../domains/social-and-session.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [クエストと世界コンテンツ](./quest-content.md) の後に実装する。
