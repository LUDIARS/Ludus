---
type: "Ludus Gameplay System"
title: "発見と地図"
description: "地点、関心事、未踏領域を記録し、自発的な探索を支える。"
tags:
  - "ludus"
  - "gameplay-system"
  - "open-world"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:open-world:discovery-map"
genre_id: "genre:open-world"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

地点、関心事、未踏領域を記録し、自発的な探索を支える。

# 設計思想

地図は答えを示し切るのでなく、好奇心を次の行動へ変える。

# 主要機能

- 地図の開示
- 目印と注釈
- 発見ログ

# UXへの寄与

- [方向感覚](../../ux/44ebe5a178d52b3e.md)
- [探索の動機](../../ux/02066e07038ecdb2.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [世界ストリーミングと移動](./streaming-traversal.md) の後に実装する。
