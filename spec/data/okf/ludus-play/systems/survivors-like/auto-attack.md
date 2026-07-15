---
type: "Ludus Gameplay System"
title: "自動攻撃と武器挙動"
description: "武器の発射・範囲・周期を自動化し、ビルド選択の結果を戦場に表す。"
tags:
  - "ludus"
  - "gameplay-system"
  - "survivors-like"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:survivors-like:auto-attack"
genre_id: "genre:survivors-like"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

武器の発射・範囲・周期を自動化し、ビルド選択の結果を戦場に表す。

# 設計思想

手数の忙しさではなく、選択の結果を見る遊びにする。

# 主要機能

- 発射周期
- 対象選択
- 範囲・貫通

# UXへの寄与

- [爽快感](../../ux/aa5e74ea6c56212d.md)
- [理解](../../ux/5cb53e3de202ecbb.md)

# ドメイン要素

- [対立と解決](../../domains/conflict-and-resolution.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [インパクト・ポストプロセス](../../pictor/impact-and-postprocess.md)

# 実装上の前提

- [移動とカイティング](./movement-kiting.md) の後に実装する。
