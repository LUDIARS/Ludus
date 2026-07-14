---
type: "Ludus Gameplay System"
title: "セーブ・ロードと既読管理"
description: "任意地点の保存と既読履歴の復元により、分岐探索を安全に行えるようにする。"
tags:
  - "ludus"
  - "gameplay-system"
  - "visual-novel"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:visual-novel:save-load"
genre_id: "genre:visual-novel"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

任意地点の保存と既読履歴の復元により、分岐探索を安全に行えるようにする。

# 設計思想

戻る行為を失敗の否定ではなく、物語の探索にする。

# 主要機能

- 複数セーブ枠
- クイックセーブ
- 既読・選択履歴の保存

# UXへの寄与

- [試行の自由](../../ux/463405847267894f.md)
- [継続性](../../ux/1c3a5a078e3ce5b4.md)

# ドメイン要素

- [メタゲームと運用](../../domains/meta-and-live-operations.md)
- [物語と知識](../../domains/narrative-and-knowledge.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [テキストアクセシビリティ](./text-accessibility.md) の後に実装する。
