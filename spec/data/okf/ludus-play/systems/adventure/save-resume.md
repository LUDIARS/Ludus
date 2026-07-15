---
type: "Ludus Gameplay System"
title: "保存と再開"
description: "長い探索と推理を任意の区切りで安全に中断・再開できるようにする。"
tags:
  - "ludus"
  - "gameplay-system"
  - "adventure"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:adventure:save-resume"
genre_id: "genre:adventure"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

長い探索と推理を任意の区切りで安全に中断・再開できるようにする。

# 設計思想

長時間の思考体験を、生活の時間割に適応させる。

# 主要機能

- 任意保存
- 状態復元
- 既読・既取得情報の維持

# UXへの寄与

- [安心感](../../ux/1be380841e916268.md)
- [継続性](../../ux/1c3a5a078e3ce5b4.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [会話と選択](./dialogue-choice.md) の後に実装する。
