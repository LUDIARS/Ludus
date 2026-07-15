---
type: "Ludus Gameplay System"
title: "インベントリ/重量管理"
description: "持ち運べるアイテム量を制限し、リソース管理の戦略を要求する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "survival"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:survival:inventory"
genre_id: "genre:survival"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

持ち運べるアイテム量を制限し、リソース管理の戦略を要求する。

# 設計思想

『所有の制約化』。無制限だと管理の意味がなく、厳しすぎると往復作業が苦痛。重量とスロットの二重制限で、少量の重い物 (装備) と大量の軽い物 (素材) のバランスを取る。

# 主要機能

- スロット制限 (持てるアイテム数の上限)
- 重量制限 (総重量での制限)
- スタック (同種アイテムの積み重ね)
- クイックスロット (即座に使える装備枠)
- 保管箱 (拠点での長期保管)
- ソート/整理 (自動整頓)

# UXへの寄与

- [選択の重み](../../ux/afd5d3c7460e8707.md)
- [拠点の価値](../../ux/d4a52a4bd758ef05.md)
- [探索の計画](../../ux/540ff971576870a7.md)

# ドメイン要素

- [リソースと経済](../../domains/resources-and-economy.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [リソース採取/収集システム](./gathering.md) の後に実装する。
