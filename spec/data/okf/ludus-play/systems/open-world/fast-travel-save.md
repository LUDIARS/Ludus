---
type: "Ludus Gameplay System"
title: "移動短縮と保存"
description: "既知の場所への移動短縮と保存により、広い世界の反復移動を負担にしない。"
tags:
  - "ludus"
  - "gameplay-system"
  - "open-world"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:open-world:fast-travel-save"
genre_id: "genre:open-world"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

既知の場所への移動短縮と保存により、広い世界の反復移動を負担にしない。

# 設計思想

初回の旅は味わわせ、既知の移動は選んで省略できるようにする。

# 主要機能

- ファストトラベル
- チェックポイント
- 状態保存

# UXへの寄与

- [尊重](../../ux/ede29e6ed2aee238.md)
- [継続性](../../ux/1c3a5a078e3ce5b4.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)
- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [世界シミュレーション](./world-simulation.md) の後に実装する。
