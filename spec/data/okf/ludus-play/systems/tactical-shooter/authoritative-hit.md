---
type: "Ludus Gameplay System"
title: "権威命中判定と補償"
description: "遅延下でも命中、被弾、死亡の一貫した結果を確定する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "tactical-shooter"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:tactical-shooter:authoritative-hit"
genre_id: "genre:tactical-shooter"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

遅延下でも命中、被弾、死亡の一貫した結果を確定する。

# 設計思想

体感応答と最終権威を分離する。

# 主要機能

- 権威サーバー
- 遅延補償
- 不正検知

# UXへの寄与

- [公平感](../../ux/761295392476961e.md)
- [応答性](../../ux/ae21574ac088130c.md)

# ドメイン要素

- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [ネットワークと同期](../../domains/network-and-synchronization.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [インパクト・ポストプロセス](../../pictor/impact-and-postprocess.md)

# 実装上の前提

- [装備購入とチーム経済](./team-economy.md) の後に実装する。
