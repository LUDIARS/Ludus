---
type: "Ludus Gameplay System"
title: "セットアップと公開情報"
description: "盤面、手札、役割、初期条件を整え、誰が何を知っているかを定義する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "board-card"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:board-card:setup-information"
genre_id: "genre:board-card"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

盤面、手札、役割、初期条件を整え、誰が何を知っているかを定義する。

# 設計思想

隠す情報と共有する情報を、遊びの目的に沿って明確に分ける。

# 主要機能

- 初期配置
- 公開・非公開領域
- 役割配布

# UXへの寄与

- [公平な開始](../../ux/33bcd68cb98f6ced.md)
- [期待感](../../ux/91ca175d56b093ef.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- このジャンル内で先行関係は定義されていない。
