---
type: "Ludus Gameplay System"
title: "対象調査と使用"
description: "物や人物への調査、アイテム使用、組み合わせを通じて状態を変化させる。"
tags:
  - "ludus"
  - "gameplay-system"
  - "adventure"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:adventure:object-interaction"
genre_id: "genre:adventure"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

物や人物への調査、アイテム使用、組み合わせを通じて状態を変化させる。

# 設計思想

総当たりを強いるのでなく、文脈と反応で仮説を導く。

# 主要機能

- 調べる・話す・使うの動詞
- 条件付きインタラクション
- 所持品と対象の照合

# UXへの寄与

- [試行の納得感](../../ux/fce17513950e6877.md)
- [発見の喜び](../../ux/5d2998518e821199.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)
- [リソースと経済](../../domains/resources-and-economy.md)
- [物語と知識](../../domains/narrative-and-knowledge.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [シーン探索と移動](./scene-exploration.md) の後に実装する。
