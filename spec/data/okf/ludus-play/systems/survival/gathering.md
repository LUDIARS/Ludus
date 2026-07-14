---
type: "Ludus Gameplay System"
title: "リソース採取/収集システム"
description: "環境から素材を集め、クラフトと生存の基盤を作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "survival"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:survival:gathering"
genre_id: "genre:survival"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

環境から素材を集め、クラフトと生存の基盤を作る。

# 設計思想

『労働の報酬化』。初期は素手で時間がかかり、ツール作成で効率化する成長実感が重要。資源のビジュアル差別化 (木は茶/石は灰) で視覚的に探しやすくする。

# 主要機能

- 採取対象 (木/石/鉱石/植物/動物)
- 採取ツール (斧/ツルハシ/ナイフの使い分け)
- 採取時間 (リソースごと)
- ツール耐久度 (劣化と修理)
- 採取量の変動 (スキル/ツール品質)
- 再生成 (時間経過で復活)

# UXへの寄与

- [収集の達成感](../../ux/789abebf3ead203f.md)
- [効率化の追求](../../ux/2da4b223b47f391b.md)
- [探索の動機](../../ux/02066e07038ecdb2.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)
- [リソースと経済](../../domains/resources-and-economy.md)
- [目的と成長](../../domains/objectives-and-progression.md)
- [コンテンツとペーシング](../../domains/content-and-pacing.md)
- [演出とフィードバック](../../domains/presentation-and-feedback.md)
- [メタゲームと運用](../../domains/meta-and-live-operations.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [生存指標/ニーズシステム](./needs.md) の後に実装する。
