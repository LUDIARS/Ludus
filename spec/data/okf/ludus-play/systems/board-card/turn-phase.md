---
type: "Ludus Gameplay System"
title: "ターンとフェーズ進行"
description: "手番、行動回数、フェーズを管理し、意思決定の順序を明確にする。"
tags:
  - "ludus"
  - "gameplay-system"
  - "board-card"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:board-card:turn-phase"
genre_id: "genre:board-card"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

手番、行動回数、フェーズを管理し、意思決定の順序を明確にする。

# 設計思想

待ち時間を増やすためでなく、決断の区切りを作る。

# 主要機能

- 手番管理
- 行動コスト
- フェーズ遷移

# UXへの寄与

- [見通し](../../ux/7fb4b30947b02823.md)
- [緊張感](../../ux/d3504ee04079ad32.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [セットアップと公開情報](./setup-information.md) の後に実装する。
