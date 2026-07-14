---
type: "Ludus Gameplay System"
title: "対戦相手AIと戦術"
description: "相手や味方が状況に応じて配置・守備・攻撃を変え、競技らしい駆け引きを作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "sports"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:sports:opponent-ai"
genre_id: "genre:sports"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

相手や味方が状況に応じて配置・守備・攻撃を変え、競技らしい駆け引きを作る。

# 設計思想

反射の強さだけでなく、理解可能なチーム行動を持たせる。

# 主要機能

- 役割別行動
- 戦術切替
- 難易度調整

# UXへの寄与

- [読み合い](../../ux/4333f56898c1e87e.md)
- [上達実感](../../ux/3edd93bc53040a0c.md)

# ドメイン要素

- [対立と解決](../../domains/conflict-and-resolution.md)
- [コンテンツとペーシング](../../domains/content-and-pacing.md)
- [対人関係とセッション](../../domains/social-and-session.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [試合進行と競技規則](./match-rules.md) の後に実装する。
