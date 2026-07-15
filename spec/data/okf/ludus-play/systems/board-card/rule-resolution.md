---
type: "Ludus Gameplay System"
title: "ルール解決と例外処理"
description: "カードや盤面の効果を一貫して解決し、競合する規則の優先順位を扱う。"
tags:
  - "ludus"
  - "gameplay-system"
  - "board-card"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:board-card:rule-resolution"
genre_id: "genre:board-card"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

カードや盤面の効果を一貫して解決し、競合する規則の優先順位を扱う。

# 設計思想

自動化しても、なぜその結果になるかを確認可能にする。

# 主要機能

- 効果スタック
- 条件判定
- 履歴と検証

# UXへの寄与

- [信頼感](../../ux/37ce614903ff205b.md)
- [戦略性](../../ux/8ded4fcfb58a7e88.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)
- [リソースと経済](../../domains/resources-and-economy.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [ターンとフェーズ進行](./turn-phase.md) の後に実装する。
