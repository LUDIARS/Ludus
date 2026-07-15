---
type: "Ludus Gameplay System"
title: "対局セッションと保存"
description: "対局の開始・再開・終了を管理し、長いゲームでも状態と履歴を保つ。"
tags:
  - "ludus"
  - "gameplay-system"
  - "board-card"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:board-card:match-session"
genre_id: "genre:board-card"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

対局の開始・再開・終了を管理し、長いゲームでも状態と履歴を保つ。

# 設計思想

卓上の手触りを損なわず、デジタルの利点で支える。

# 主要機能

- セッション作成
- 中断再開
- 勝敗記録

# UXへの寄与

- [継続性](../../ux/1c3a5a078e3ce5b4.md)
- [振り返り](../../ux/6a54b9eecb7483fc.md)

# ドメイン要素

- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [対戦相手AIと進行補助](./opponent-assist.md) の後に実装する。
