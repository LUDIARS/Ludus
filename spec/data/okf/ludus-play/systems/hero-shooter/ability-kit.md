---
type: "Ludus Gameplay System"
title: "固有アビリティキット"
description: "通常攻撃、移動、防御、支援能力を一つの役割ループにまとめる。"
tags:
  - "ludus"
  - "gameplay-system"
  - "hero-shooter"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:hero-shooter:ability-kit"
genre_id: "genre:hero-shooter"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

通常攻撃、移動、防御、支援能力を一つの役割ループにまとめる。

# 設計思想

各能力の反撃可能性を残す。

# 主要機能

- クールダウン
- リソース消費
- 状態効果

# UXへの寄与

- [個性](../../ux/5bb32ea5a1a87ed3.md)
- [熟達](../../ux/79dca58dcb75a487.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)
- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [リソースと経済](../../domains/resources-and-economy.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [ヒーロー名簿と役割](./hero-roster.md) の後に実装する。
