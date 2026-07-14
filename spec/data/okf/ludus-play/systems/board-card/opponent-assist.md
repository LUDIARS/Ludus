---
type: "Ludus Gameplay System"
title: "対戦相手AIと進行補助"
description: "ソロ対戦・協力時の相手行動と、ルール説明・操作補助を提供する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "board-card"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:board-card:opponent-assist"
genre_id: "genre:board-card"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

ソロ対戦・協力時の相手行動と、ルール説明・操作補助を提供する。

# 設計思想

AIを単なる最適解計算機にせず、学習相手にもする。

# 主要機能

- 方針を持つAI
- 手順ガイド
- 取り消しと確認

# UXへの寄与

- [学びやすさ](../../ux/b6583c64a32d777f.md)
- [一人遊び](../../ux/536a13e95e2ecc41.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [対人関係とセッション](../../domains/social-and-session.md)
- [アクセシビリティと支援](../../domains/accessibility-and-assistance.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [手札・盤面・山札の状態](./hand-table-state.md) の後に実装する。
