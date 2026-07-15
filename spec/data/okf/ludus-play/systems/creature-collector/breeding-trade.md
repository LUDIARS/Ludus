---
type: "Ludus Gameplay System"
title: "繁殖・交換と継承"
description: "個体差を次世代や他プレイヤーへ継承する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "creature-collector"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:creature-collector:breeding-trade"
genre_id: "genre:creature-collector"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

個体差を次世代や他プレイヤーへ継承する。

# 設計思想

希少性と倫理表現を世界設定に整合させる。

# 主要機能

- 特性継承
- 交換条件
- 重複価値

# UXへの寄与

- [探究](../../ux/42ccb3c44f64ce49.md)
- [交流](../../ux/bed1d122224afad1.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [配置と生活利用](./habitat-work.md) の後に実装する。
