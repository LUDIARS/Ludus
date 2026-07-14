---
type: "Ludus Gameplay System"
title: "パワーアップと装備選択"
description: "攻撃・防御・移動の能力を変化させ、局面に応じた攻略方針を作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "shmup"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:shmup:power-up"
genre_id: "genre:shmup"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

攻撃・防御・移動の能力を変化させ、局面に応じた攻略方針を作る。

# 設計思想

強化を単なる火力増加にせず、回避と攻略の手段にする。

# 主要機能

- 強化アイテム
- 武器切替
- ボム・残機

# UXへの寄与

- [成長感](../../ux/a20ec92b8f4e292a.md)
- [戦略性](../../ux/8ded4fcfb58a7e88.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)
- [対立と解決](../../domains/conflict-and-resolution.md)
- [リソースと経済](../../domains/resources-and-economy.md)
- [目的と成長](../../domains/objectives-and-progression.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [スコアとチェイン](./score-chain.md) の後に実装する。
