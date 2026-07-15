---
type: "Ludus Gameplay System"
title: "クエストと世界コンテンツ"
description: "物語、探索、戦闘、反復目標を世界上の活動として配信する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "mmorpg"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:mmorpg:quest-content"
genre_id: "genre:mmorpg"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

物語、探索、戦闘、反復目標を世界上の活動として配信する。

# 設計思想

共有世界と個別進行の矛盾を定義する。

# 主要機能

- クエスト状態
- 公開イベント
- インスタンス

# UXへの寄与

- [目的感](../../ux/0a5be462c231210c.md)
- [物語没入](../../ux/590972386b14f267.md)

# ドメイン要素

- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [目的と成長](../../domains/objectives-and-progression.md)
- [物語と知識](../../domains/narrative-and-knowledge.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [アバター長期成長](./avatar-progression.md) の後に実装する。
