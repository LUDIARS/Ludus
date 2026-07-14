---
type: "Ludus Gameplay System"
title: "降下・危険区域"
description: "開始地点と危険区域の変化を設計し、毎試合の移動判断を生む。"
tags:
  - "ludus"
  - "gameplay-system"
  - "battle-royale"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:battle-royale:deployment-zone"
genre_id: "genre:battle-royale"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

開始地点と危険区域の変化を設計し、毎試合の移動判断を生む。

# 設計思想

偶然の配置を、意味のある移動判断に変える。

# 主要機能

- 降下地点選択
- 安全地帯の縮小
- 危険区域の予告

# UXへの寄与

- [緊張感](../../ux/d3504ee04079ad32.md)
- [戦術の多様性](../../ux/10b3229edfeae30f.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- このジャンル内で先行関係は定義されていない。
