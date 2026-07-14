---
type: "Ludus Gameplay System"
title: "分隊・救助・再参加"
description: "仲間との役割分担、救助、再参加条件を通じてチームの物語を作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "battle-royale"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:battle-royale:squad-revive"
genre_id: "genre:battle-royale"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

仲間との役割分担、救助、再参加条件を通じてチームの物語を作る。

# 設計思想

脱落を即時の退屈にせず、チーム判断に変える。

# 主要機能

- 分隊状態
- 救助行動
- 再参加条件

# UXへの寄与

- [協力感](../../ux/0b38736654c4c3bc.md)
- [逆転の期待](../../ux/ab1bb84b02c1f8b7.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [対人関係とセッション](../../domains/social-and-session.md)
- [物語と知識](../../domains/narrative-and-knowledge.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [戦闘と生存](./combat-survival.md) の後に実装する。
