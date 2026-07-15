---
type: "Ludus Gameplay System"
title: "発見後の逃走と再潜伏"
description: "発見、追跡、遮断、再潜伏を連続した状態として扱う。"
tags:
  - "ludus"
  - "gameplay-system"
  - "stealth"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:stealth:detection-recovery"
genre_id: "genre:stealth"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

発見、追跡、遮断、再潜伏を連続した状態として扱う。

# 設計思想

検知を即ゲームオーバーにしない。

# 主要機能

- 最終確認位置
- 追跡解除
- 再探索

# UXへの寄与

- [逆転感](../../ux/d46d3b5804ac1d54.md)
- [駆け引き](../../ux/22899353e77ad6ec.md)

# ドメイン要素

- [空間と移動](../../domains/space-and-navigation.md)
- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [介入手段の選択](./intervention-choice.md) の後に実装する。
