---
type: "Ludus Gameplay System"
title: "無力化・救助・離脱"
description: "敗北を段階化し、味方の介入と早期離脱を扱う。"
tags:
  - "ludus"
  - "gameplay-system"
  - "asymmetric-multiplayer"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:asymmetric-multiplayer:elimination-rescue"
genre_id: "genre:asymmetric-multiplayer"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

敗北を段階化し、味方の介入と早期離脱を扱う。

# 設計思想

脱落者の拘束時間を最小化する。

# 主要機能

- 無力化状態
- 救助
- 観戦と退出

# UXへの寄与

- [協力感](../../ux/0b38736654c4c3bc.md)
- [継続性](../../ux/1c3a5a078e3ce5b4.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)
- [ネットワークと同期](../../domains/network-and-synchronization.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [複数目標と時間圧](./objective-pressure.md) の後に実装する。
