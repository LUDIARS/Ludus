---
type: "Ludus Gameplay System"
title: "敵群生成と圧力制御"
description: "敵の種類・量・出現方向を制御し、時間経過で増す圧力を作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "survivors-like"
  - "pictor-visual"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:survivors-like:swarm-spawn"
genre_id: "genre:survivors-like"
implementation_status: "pictor-visual"
implementation_owner: "Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

敵の種類・量・出現方向を制御し、時間経過で増す圧力を作る。

# 設計思想

数を増やすだけでなく、回避経路が生まれる群れ方にする。

# 主要機能

- スポーン規則
- 敵群の誘導
- 時間別難度

# UXへの寄与

- [高揚感](../../ux/4ce3cf3d58819115.md)
- [緊張感](../../ux/d3504ee04079ad32.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [入力と操作](../../domains/input-and-control.md)
- [空間と移動](../../domains/space-and-navigation.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [コンテンツとペーシング](../../domains/content-and-pacing.md)

# 汎用実装の判定

- **状態**: pictor-visual
- **所有**: Pictor
- **判断**: ゲーム固有の意味付けを持たない視覚表現としてPictorに集約する候補。

# Pictor候補

- [インパクト・ポストプロセス](../../pictor/impact-and-postprocess.md)

# 実装上の前提

- [自動攻撃と武器挙動](./auto-attack.md) の後に実装する。
