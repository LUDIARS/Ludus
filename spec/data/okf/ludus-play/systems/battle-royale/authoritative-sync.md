---
type: "Ludus Gameplay System"
title: "権威同期と不正対策"
description: "移動、命中、所持品の状態を権威的に同期し、公平な対戦を支える。"
tags:
  - "ludus"
  - "gameplay-system"
  - "battle-royale"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:battle-royale:authoritative-sync"
genre_id: "genre:battle-royale"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

移動、命中、所持品の状態を権威的に同期し、公平な対戦を支える。

# 設計思想

通信品質の違いと不正が、遊びの上達を損なわないようにする。

# 主要機能

- サーバー権威判定
- 遅延補償
- 不正検知の境界

# UXへの寄与

- [公平感](../../ux/761295392476961e.md)
- [対戦の安心](../../ux/fd4206976feedf11.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)
- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [対人関係とセッション](../../domains/social-and-session.md)
- [ネットワークと同期](../../domains/network-and-synchronization.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [インパクト・ポストプロセス](../../pictor/impact-and-postprocess.md)

# 実装上の前提

- [分隊・救助・再参加](./squad-revive.md) の後に実装する。
